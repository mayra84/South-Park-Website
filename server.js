const http = require('http');
const data = require('./data')
const episodes = data.episodes
const characters = data.characters

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const server = http.createServer(app);

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('<h1>hi</h1>')
})

app.get('/api/v1/characters', (req, res) => {
    res.json(characters)
})

app.get('/api/v1/episodes', (req, res) => {
    res.json(episodes)
})



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})