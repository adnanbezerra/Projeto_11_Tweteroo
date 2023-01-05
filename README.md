# <p align = "center"> Back-End Server Template with TypeScript </p>

<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f424.svg" width="250px"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/backend-typescript?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Este é o primeiro projeto de back-end feito pela Driven Education. Ele serve como um meio de coordenar uma aplicação que é mais ou menos clone do Twitter, apenas recebendo e enviando tweets com um sistema de login baseado na sessão atual do usuário, sem fazer persistir as informações de conta.

Foi um projeto muito simples e que, inclusive, era um monolito de início, mas foi refatorado para uma estrutura com TypeScript e arquitetura de camadas.

***

## :computer:	 Tecnologias e Conceitos

- Node.js
- TypeScript
- Layered architecture
- PostgreSQL with Prisma
- JWTs
- Testing with Jest and Faker

***

## :rocket: Rotas

```yml
POST /sign-up
    - Rota para fazer login
    - headers: {}
    - body: {
        username: "Lorem ipsum",
        avatar: "https://loremipsum.com" (nullable)
    }
```

```yml
GET /tweets
    - Rota para receber os 10 tweets mais recentes
    - headers: {}
    - body: {}
```

```yml
POST /tweet
    - Rota para publicar um novo tweet
    - headers: {}
    - body: {
        username: "Lorem ipsum",
        tweet: "Vive le Roi!"
    }
```

## 🏁 Rodando a aplicação

Esse projeto foi feito com [ExpressJS](https://github.com/expressjs/express), então é preciso que sua máquina tenha instaladas as versões estáveis mais recentes do [Node.js](https://nodejs.org/en/download/) e do [npm](https://www.npmjs.com/).

Primeiramente, você precisa clonar esse repositório para a sua máquina:

```
git clone https://github.com/adnanbezerra/teachme-backend.git
```

Então, dentro do diretório do projeto, você deve rodar o seguinte comando para instalar as dependências necessárias:

```
npm install
```

Agora, você preisa configurar o arquivo `.env`. Você deve copiar o que estiver dentro de `.env.example`, criar um arquivo `.env`, colar as informações copiadas e preencher as variáveis necessária.

Agora, você pode finalmente rodar o seu servidor localmente usando esse comando:
```
npm start
```