const jokes = require("../controllers/joke.controller")

module.exports = app => {
    app.post('/api/jokes/create',jokes.createJoke)
    app.get('/api/jokes',jokes.getAllJokes)
    app.get('/api/jokes/:id',jokes.getOneJoke)
    app.put('/api/jokes/:id',jokes.updateJoke)
    app.delete('/api/jokes/:id',jokes.deleteJoke)
    
}