const user = require('../controllers/user.controller')


module.exports = app => {
    app.post('/api/register',user.register)
    app.post('/api/login',user.login)
    app.post('/api/login',user.login)
    app.post('/api/logout',user.logout)
    app.get('/api/loggedUser',user.getLoggedUser)
    // app.get('/api/notes',note.findAll)
    // app.get('/api/notes/:id',note.findOne)
    // app.put('/api/notes/:id',note.update)
    // app.delete('/api/notes/:id',note.delete)
}