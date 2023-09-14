const note = require('../controllers/note.controller')


module.exports = app => {
    app.post('/api/notes',note.create)
    app.get('/api/notes',note.findAll)
    app.get('/api/notes/:id',note.findOne)
    app.put('/api/notes/:id',note.update)
    app.delete('/api/notes/:id',note.delete)
}