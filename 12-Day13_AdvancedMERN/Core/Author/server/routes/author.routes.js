const note = require('../controllers/author.controller')


module.exports = app => {
    app.post('/api/authors',note.create)
    app.get('/api/authors',note.findAll)
    app.get('/api/authors/:id',note.findOne)
    app.put('/api/authors/:id',note.update)
    app.delete('/api/authors/:id',note.delete)
}