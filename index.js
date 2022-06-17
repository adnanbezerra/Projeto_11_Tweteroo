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
    response.send(getLastTenTweets())
})

function getLastTenTweets() {
    const lastTenTweets = [];

    for(let i = 0; i < 10; i++) {
        if(i === tweetsList.length) break;
        lastTenTweets.push(setTweet(i))
    }

    return lastTenTweets;
}

function setTweet(index) {
    const user = usersList.find(user => user.username === tweetsList[index].username);

    const tweet = {
        username: user.username,
        avatar: user.avatar,
        tweet: tweetsList[index].tweet
    };

    return(tweet)
}

server.post('/tweets', (request, response) => {
        
    const tweet = {
        username: request.body.username,
        tweet: request.body.tweet
    }
    
    tweetsList.unshift(tweet)
    response.send('oi')
})

server.listen(5000);