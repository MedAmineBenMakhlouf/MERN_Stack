const person = require('../controllers/person.controller')


module.exports = app => {
    app.post('/api/products/create',person.createProduct)
    app.get('/api/products',person.getAll)
    app.get('/api/products/:id',person.getOne)
    app.put('/api/products/:id',person.edit)
    app.delete('/api/products/:id',person.delete)
}