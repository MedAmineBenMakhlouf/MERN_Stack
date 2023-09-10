const helo = require('../controllers/helo.controller')

module.exports = app => {
    app.get('/api',helo.index)
}