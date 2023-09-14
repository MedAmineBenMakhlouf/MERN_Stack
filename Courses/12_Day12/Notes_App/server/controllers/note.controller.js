const Note = require('../models/note.model')
const jwt = require('jsonwebtoken')
const SECRET = require('cookie-parser')

module.exports = {
    findAll:(req,res)=>{
        Note.find().populate('user')
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
        Note.findById(req.params.id).populate('user')
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
        const {id:userId} = jwt.verify(req.cookies.userToken,SECRET)
        Note.create({...req.body,id:userId})
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