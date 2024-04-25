# _Setup_

1. Comece criando um diretório chamado `moises-test/`
2. Via terminal de linha de comando, visite o diretório recém criado (`cd moises-test/`)
3. Execute o comando `git init`
4. Na raiz do projeto, crie um arquivo oculto chamado `.gitignore` com o seguinte conteúdo:

```.gitignore
.DS_Store
cypress.env.json
cypress/downloads/
cypress/screenshots/
cypress/videos/
node_modules/

```

5. Ainda na raiz do projeto, crie um arquivo chamado `README.md` com o seguinte conteúdo:

```md
# Testes _end-to-end_ com Cypress

TBD.

```

6. Execute o comando `npm init -y`
7. Execute o comando `npm install cypress@12.15.0 --save-dev` (ou `npm i cypress@12.15.0 -D` para a versão curta)
8. Também na raiz do projeto, crie um arquivo chamado `cypress.env.json` e outro chamado `cypress.env.example.json`. Inicialize ambos como um objeto vazio (`{}`)
9. Execute o comando `npx cypress open` para abrir o Cypress pela primeira vez
10. Com a __Cypress App__ aberta, clique no box _E2E Testing_
11. Na seção _Configuration Files_, clique em _Continue_
12. Na seção _Choose a browser_, selecione o Electron (ou Chrome) e clique em _Start E2E Testing in [browser]_
13. Com o navegador aberto, clique em _Create new spec_, aceite o nome padrão, clique em _Create spec_ e então clique em _Okay, run the spec_.
14. Por fim, feche o navegador e a __Cypress App__.


> **Obs.:** Após seguir os passos acima, o Cypress automaticamente criará a estrutura do projeto de testes, com o arquivo `cypress.config.js` e o diretório `cypress/` com os sub-diretórios `e2e/`, `fixtures/` e `support/`, com seus respetivos arquivos.

___