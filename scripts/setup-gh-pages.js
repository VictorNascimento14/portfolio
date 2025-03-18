
// Este é um script de ajuda para configurar o GitHub Pages
// Você precisará adicionar manualmente os seguintes scripts ao seu package.json:

/*
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",
*/

console.log(`
========== INSTRUÇÕES PARA CONFIGURAR O GITHUB PAGES ==========

1. Adicione os seguintes scripts ao seu package.json na seção "scripts":
   
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"

2. Certifique-se de que seu repositório GitHub esteja configurado corretamente:
   
   a. Vá para as configurações do seu repositório
   b. Navegue até "Pages" no menu lateral
   c. Em "Build and deployment", selecione:
      - Source: "GitHub Actions"

3. Para fazer o deploy, execute:
   
   npm run deploy

4. Ou faça um push para a branch principal para acionar o GitHub Actions
   
=================================================================
`);
