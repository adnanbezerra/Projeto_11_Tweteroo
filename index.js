import express from "express";
import cors from "cors";

const server = express()
server.use(cors())
server.use(express.json())

const usersList = []

const tweetsList = []

server.post('/sign-up', (request, response) => {
    const user = {
      username: request.body.username,
      avatar: request.body.avatar  
    }

    usersList.push(user)

    response.send(request.body)
})

server.get('/tweets', (request, response) => {
    response.send(tweetsList)
})

server.post('/tweets', (request, response) => {
    
    // To do: adicionar um find no array usersList
    // para procurar o avatar do usuário atrelado
    // e então salvar no array assim:

    // { username: "", avatar: "", tweet: ""}
    // colocar para enviar ali em cima

    console.log(request.body)
    response.send('oi')
})

server.listen(5000);