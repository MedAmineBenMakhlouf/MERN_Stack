const job = require('../models/job.model')

module.exports.create = (req, res) => (
    job.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.getAll = (req, res) => (
    job.find()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.getOne = (req, res) => (
    job.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.edit = async (req, res) => (
    job.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidator:true})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.delete = (req, res) => (
    job.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)