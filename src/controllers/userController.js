const userModel = require("../models/userModel")
//const UserModel= require("../models/userModel")

const creatanewbooks= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getListofallbooks= async function (req, res) {
    let allUsers= await userModel.find() 
    res.send({msg: allUsers})
}
const getListofbooknameandAuthor =async function(req, res) {
    let listofbookauthorname= await userModel.find().select({bookName:1,authorName:1,_id:0});
    res.send({msg: listofbookauthorname})
}
const getinputYear =async function(req, res) {
    let inputyear =req.query.input
    let year =await userModel.find({year:{$eq:inputyear}})
    res.send({msg: year})
}
const getinputYearandName =async function(req, res) {
   // let yearandbookName= await userModel.find().select({bookName:"The Lion, the Witch, and the Wardrobe",year:2021});
  let yearandbookName =await userModel.find({$or:[{bookName:"The Lion, the Witch, and the Wardrobe"},{year:2021}]})
    res.send({msg:   yearandbookName})
}
const getinputPricebetw =async function(req, res) {
    
    let indianPrice =await userModel.find({price:{$in:[100,200,500,600]}})
    res.send({msg:  indianPrice})
}
const getiAvailableinStockGt =async function(req, res) {
    
    let StockandPrice =await userModel.find({$or:[{stockavailable:true},{totalpages:500}]})
    res.send({msg:  StockandPrice})
}


module.exports.creatanewbooks= creatanewbooks
module.exports.getListofallbooks= getListofallbooks
module.exports.getListofbooknameandAuthor= getListofbooknameandAuthor
module.exports.getinputYear= getinputYear 
module.exports.getinputYearandName= getinputYearandName 
module.exports.getinputPricebetw= getinputPricebetw 
module.exports.getiAvailableinStockGt= getiAvailableinStockGt 


