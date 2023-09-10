const product = require('../models/person.model')

module.exports.createProduct = (req, res) => (
    product.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.getAll = (req, res) => (
    product.find()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.getOne = (req, res) => (
    product.findOne({id:req.params._id})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.edit = (req, res) => (
    product.findOneAndUpdate({id:req.params._id},req.body,{new:true})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)

module.exports.delete = (req, res) => (
    product.findOneAndDelete({id:req.params._id})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
)