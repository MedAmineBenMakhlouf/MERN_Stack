const job = require('../controllers/job.controller')


module.exports = app => {
    app.post('/api/jobs',job.create)
    app.get('/api/jobs',job.getAll)
    app.get('/api/jobs/:id',job.getOne)
    app.put('/api/jobs/:id',job.edit)
    app.delete('/api/jobs/:id',job.delete)
}