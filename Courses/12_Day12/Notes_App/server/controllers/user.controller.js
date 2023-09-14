const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
module.exports = {
    // registerOld:(req,res)=>{
    //     User.create(req.body)
    //     .then(response=>{
    //         res.status(201).json(response)
    //     })
    //     .catch(error=> res.status(400).json(error))
    // },
    register: async (req, res) => {
        try {
            const user = new User(req.body)
            const newUser = await user.save()
            const userToken = jwt.sign({ id: newUser._id }, SECRET)
            console.log(`USER ID ${newUser._id}\n user token: ${userToken}`)
            res.status(200)
                .cookie("userToken", userToken, { httpOnly: true })
                .json(newUser)

        }
        catch (error) {
            res.status(400).json(error)
        }
    },
    login: async (req, res) => {

        const userFromDB = await User.findOne({ email: req.body.email })
        if (!userFromDB) {
            res.status(404).json({ error: "User Not Found" })
        }
        else {
            try {
                const isPasswordValid = await bcrypt.compare(req.body.password, userFromDB.password)
                if (isPasswordValid) {

                    const userToken = jwt.sign({ id: userFromDB._id }, SECRET)
                    console.log(`USER ID ${userFromDB._id}\n user token: ${userToken}`)
                    res.status(200)
                        .cookie("userToken", userToken, { httpOnly: true })
                        .json({ message: "User Logged In successfully!!" })

                }
                else {
                    res.status(400).json({ message: "Invalid Email or Password" })
                }
            }
            catch (error) {
                res.status(400).json({ message: "Invalid Email or Password" })

            }
        }


    },
    logout: async (req, res) => {
        try {
            res.clearCookie("userToken")
            res.status(200).json({ message: "User Logged out successfully!!" })
        }
        catch (error) {
            res.status(500).json({ message: "Something went wrong", error })
        }
    },
    getLoggedUser: async (req, res) => {
        try {
            const userToken = req.cookies.userToken
            const loggedUserId = jwt.verify(userToken, SECRET)
            console.log(`userToken ${userToken}\n User ID: ${loggedUserId}`)
            const user = await User.findOne({ _id: loggedUserId.id })
            res.status(200).json({ message: "user Found", user })
        }
        catch (error) {
            res.status(200).json({ message: "No token Provided", error })
        }
    }
}