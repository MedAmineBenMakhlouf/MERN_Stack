const joke = require('../models/joke.model')

module.exports.createJoke = (req, res) => {
    if (req.body.setup.length < 10) {
        res.status(422).send('Setup must be at least 10 characters long')
    }
    if (req.body.punchLine.length < 3) {
        res.status(422).send('punchLine must be at least 3 characters long')
    }
    console.log(req.body)
    joke.create(req.body)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(400).json(error))

}

module.exports.getAllJokes = (req, res) => {
    joke.find()
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
}

module.exports.getOneJoke = (req, res) => {
    joke.findById({_id:req.params.id})
        .then(result => res.status(200).json(result))
        .catch(error => res.status(400).json(error))
}

module.exports.updateJoke =( req,res) => {
    joke.findOneAndUpdate({_id:req.params.id},req.body, {new:true})
    .then((updated)=>res.json(updated))
    .catch(error => res.status(400).json(error))
}

module.exports.deleteJoke = (req,res) => 
{
    joke.deleteOne({_id:req.params.id})
    .then(result =>res.status(201).json(result))
    .catch(error => res.status(400).json(error))
}