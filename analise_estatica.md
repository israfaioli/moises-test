# Análise estática de código

Neste curso, além de testes e2e, você também vai aprender como configurar uma das ferramentas mais utilizadas pela comunidade JavaScript para análise estática de código, o [ESLint](http://npmjs.com/package/eslint).

O time do Cypress mantém um plugin com recomendações de convenções na escrita de testes automatizados, o qual pode ser configurado após a configuração do ESLint propriamente dito.

Portanto, primeiro você terá que configurar o ESLint.

## Exercício

1. No terminal de linha de comando, no diretório `moises-test/`, execute o comando `npm install eslint@8.43.0 --save-dev` (ou `npm i eslint@8.43.0 -D` para a versão curta)
2. Logo após, execute o comando `npx eslint --init` e escolhas as opções que fizerem sentido para você (se não souber o que escolher, assita a aula onde executo tal comando e veja as opções que escolhi, ou então, simplesmente copie a versão final do meu arquivo `.eslintrc.json`, conforme abaixo)

```json
// .eslintrc.json

{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-trailing-spaces": [
            "error"
        ]
    }
}

```

## Exercício extra 1 - [`eslint-plugin-cypress`](https://www.npmjs.com/package/eslint-plugin-cypress)

1. No terminal de linha de comando, no diretório `moises-test/`, execute o comando `npm install eslint-plugin-cypress@2.13.3 --save-dev` (ou `npm i eslint-plugin-cypress@2.13.3 -D` para a versão curta)
2. Logo após, dentro do diretório `cypress/`, crie outro arquivo chamado `.eslintrc.json` com o seguinte conteúdo:

```.eslintrc.json
{
  "extends": [
    "plugin:cypress/recommended"
  ],
  "rules": {
    "cypress/no-force": "error",
    "cypress/assertion-before-screenshot": "error",
    "cypress/no-pause": "error"
  }
}

```