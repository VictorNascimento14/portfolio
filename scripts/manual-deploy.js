
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
  console.log('Construindo o projeto...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Criando branch gh-pages se não existir...');
  try {
    execSync('git show-ref --verify --quiet refs/heads/gh-pages');
    console.log('Branch gh-pages já existe.');
  } catch (e) {
    console.log('Criando nova branch gh-pages...');
    execSync('git checkout --orphan gh-pages');
    execSync('git reset --hard');
    execSync('git commit --allow-empty -m "Iniciar branch gh-pages"');
    execSync('git checkout main');
  }
  
  console.log('Enviando conteúdo da pasta dist para branch gh-pages...');
  execSync('git checkout gh-pages');
  
  // Limpar arquivos existentes (exceto .git)
  const files = fs.readdirSync(process.cwd())
    .filter(file => file !== '.git' && file !== 'node_modules');
  
  for (const file of files) {
    if (fs.lstatSync(file).isDirectory()) {
      fs.rmSync(file, { recursive: true, force: true });
    } else {
      fs.unlinkSync(file);
    }
  }
  
  // Copiar conteúdo da pasta dist
  const distFiles = fs.readdirSync(path.join(process.cwd(), 'dist'));
  for (const file of distFiles) {
    const sourcePath = path.join(process.cwd(), 'dist', file);
    const targetPath = path.join(process.cwd(), file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      fs.cpSync(sourcePath, targetPath, { recursive: true });
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
  
  // Commit e push
  execSync('git add .');
  execSync('git commit -m "Deploy to GitHub Pages"');
  execSync('git push origin gh-pages --force');
  
  console.log('Voltando para a branch main...');
  execSync('git checkout main');
  
  console.log('🎉 Deploy concluído com sucesso!');
  console.log('Seu site deverá estar disponível em breve em: https://seu-usuario.github.io/seu-repo/');
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
