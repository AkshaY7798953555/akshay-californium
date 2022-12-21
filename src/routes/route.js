const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const bookController1= require("../controllers/bookController1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

//router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)
router.post("/getBooksDataone", bookController1.getBooksData)

module.exports=router;
