const Note = require('../models/author.model')

module.exports = {
    findAll:(req,res)=>{
        Note.find()
        .then(dbResponse => {
            res.status(200).json(dbResponse)
            console.log("Response: ",dbResponse)
        })
        .catch(error => {
            res.status(400).json(error)
            console.log("Error: ",error)
        })
    },

    findOne:(req,res)=>{
        Note.findById(req.params.id)
        .then(dbResponse => {
            res.status(200).json(dbResponse)
            console.log("Response: ",dbResponse)
        })
        .catch(error => {
            res.status(400).json(error)
            console.log("Error: ",error)
        })
    },

    create:(req,res)=>{
        Note.create(req.body)
        .then(dbResponse => {
            res.status(201).json(dbResponse)
            console.log("Response: ",dbResponse)
        })
        .catch(error => {
            res.status(400).json(error.errors)
            console.log("Error: ",error)
        })
    },

    update:(req,res)=>{
        Note.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidator:true})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
    },

    delete:(req,res)=>{
        Note.findByIdAndDelete(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
    },
}