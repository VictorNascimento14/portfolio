
# Instruções para Deploy no GitHub Pages

Existem duas maneiras de fazer o deploy deste site no GitHub Pages:

## Método 1: Usando GitHub Actions (Recomendado)

1. Certifique-se de que seu repositório tenha a branch `main`
2. Na página do seu repositório no GitHub, vá para:
   - Settings > Pages
   - Em "Build and deployment", selecione:
     - Source: "GitHub Actions"
3. Faça um push para a branch `main` ou clique em "Actions" e execute o workflow "Deploy to GitHub Pages" manualmente

## Método 2: Deploy Manual

Se o GitHub Actions não estiver funcionando por algum motivo, você pode fazer o deploy manualmente:

1. Execute o script de deploy manual:
   ```
   node scripts/manual-deploy.js
   ```

2. Este script irá:
   - Construir o projeto
   - Criar uma branch gh-pages (se não existir)
   - Copiar o conteúdo da pasta dist para esta branch
   - Fazer push para o GitHub

## Verificação

Após o deploy, seu site estará disponível em:
`https://[seu-nome-de-usuario].github.io/[nome-do-repositorio]/`

**Nota:** Pode levar alguns minutos para que as alterações sejam visíveis online.

## Solução de Problemas

Se o deploy não estiver funcionando:

1. Verifique se você tem permissões de administrador no repositório
2. Certifique-se de que a opção GitHub Pages esteja habilitada nas configurações
3. Verifique se não há erros nos logs do GitHub Actions

Para mais ajuda, consulte a [documentação oficial do GitHub Pages](https://docs.github.com/pt/pages).
