import express from "express";
const app = express()
// app.use(cors())

const users = []

const tweets = []

app.post('/sign-up', (request, response) => {
    const user = {
        
    }

    response.send('oi')
})

app.get('/tweets', (request, response) => {
    response.send('oi')
})

app.post('/tweets', (request, response) => {
    
})

app.listen(5000);