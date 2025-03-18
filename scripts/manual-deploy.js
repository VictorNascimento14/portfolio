
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Iniciando processo de deploy manual para GitHub Pages...');

// Verificando se o diretório .git existe
if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
  console.error('Erro: Este diretório não parece ser um repositório Git.');
  console.log('Por favor, certifique-se de estar no diretório raiz do seu projeto Git.');
  process.exit(1);
}

try {
  // Certifique-se de estar na branch main
  console.log('Verificando a branch atual...');
  try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    if (currentBranch !== 'main') {
      console.log(`Alterando da branch ${currentBranch} para main...`);
      execSync('git checkout main');
    }
  } catch (e) {
    console.error('Erro ao verificar ou mudar para a branch main:', e.message);
    process.exit(1);
  }

  console.log('Construindo o projeto...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Criando ou atualizando branch gh-pages...');
  try {
    // Verificar se a branch gh-pages existe
    const branchExists = execSync('git branch -a').toString().includes('gh-pages');
    
    if (!branchExists) {
      console.log('Criando nova branch gh-pages...');
      execSync('git checkout --orphan gh-pages');
      execSync('git rm -rf .', { stdio: 'ignore' });
    } else {
      console.log('A branch gh-pages já existe, atualizando...');
      execSync('git checkout gh-pages');
      // Limpar tudo exceto .git
      execSync('git rm -rf .', { stdio: 'ignore' });
    }
  } catch (e) {
    console.error('Erro ao manipular a branch gh-pages:', e.message);
    execSync('git checkout main');
    process.exit(1);
  }
  
  console.log('Copiando conteúdo da pasta dist para a branch gh-pages...');
  // Copiar conteúdo da pasta dist para a raiz
  fs.cpSync(path.join(process.cwd(), 'dist'), process.cwd(), { 
    recursive: true, 
    force: true 
  });
  
  // Adicionar um arquivo .nojekyll para evitar processamento Jekyll
  fs.writeFileSync(path.join(process.cwd(), '.nojekyll'), '');
  
  // Commit e push
  console.log('Commitando e enviando alterações...');
  execSync('git add .');
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'ignore' });
  execSync('git push origin gh-pages --force');
  
  console.log('Voltando para a branch main...');
  execSync('git checkout main');
  
  console.log('🎉 Deploy concluído com sucesso!');
  console.log('Seu site deverá estar disponível em breve em:');
  
  // Tenta determinar a URL do GitHub Pages
  try {
    const remoteUrl = execSync('git remote get-url origin').toString().trim();
    const repoMatches = remoteUrl.match(/github\.com[:/]([^\/]+)\/([^\/\.]+)/);
    
    if (repoMatches) {
      const [_, username, repo] = repoMatches;
      console.log(`https://${username}.github.io/${repo.replace('.git', '')}/`);
    } else {
      console.log('https://seu-usuario.github.io/seu-repo/');
    }
  } catch (e) {
    console.log('https://seu-usuario.github.io/seu-repo/');
  }
  
  console.log('Nota: Pode levar alguns minutos para que as alterações sejam visíveis.');
  
} catch (error) {
  console.error('Erro durante o deploy:', error.message);
  console.log('Tentando voltar para a branch main...');
  try {
    execSync('git checkout main');
  } catch (e) {
    console.error('Não foi possível voltar para a branch main.');
  }
  process.exit(1);
}
