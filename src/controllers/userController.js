const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const creatanewbooks= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getListofallbooks= async function (req, res) {
    let allUsers= await userModel.find()
    res.send({msg: allUsers})
}

module.exports.creatanewbooks= creatanewbooks
module.exports.getListofallbooks= getListofallbooks