const { count } = require("console")
const { get } = require("mongoose")
const bookModel1 = require("../models/bookModel1")
const bookmodel1 = require("../models/bookModel1")
//const BookModel= require("../models/bookModel1")
//createBook : to create a new entry..use this api to create 11+ entries in your collection
const getBooksData= async function (req, res) {
    let data= req.body

    let savedData= await bookmodel1.create(data)
    res.send({msg: savedData})
}
module.exports.getBooksData= getBooksData
const findBook= async function (req, res) {
    let data = req.body
let allBooks= await bookModel1.find( { bookName}  ,{authorName} )
res.send({msg: allBooks})
}
module.exports.findBook=findBook