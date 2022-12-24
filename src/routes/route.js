const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/creatanewbooks", UserController.creatanewbooks  )
router.get("/getListofallbooks", UserController.getListofallbooks)
router.get("/getListofbooknameandAuthor", UserController.getListofbooknameandAuthor)
router.get("/getinputYear", UserController.getinputYear)
router.get("/getinputYearandName", UserController.getinputYearandName)
router.get("/getinputPricebetw", UserController.getinputPricebetw)
router.get("/getiAvailableinStockGt", UserController.getiAvailableinStockGt)



module.exports = router;