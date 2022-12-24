const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
      type :String,
      default :true
    },
    price:{
      type: Number,
      indianprice:Number,
      europianprice:Number
    },
    year:{
      type:Number,
      default:2021
    },
    tags:[],
    authorName: String,
    totalpages:Number,
    stockavailable:Boolean,
    category: String,
    
    //mobile: {
       // type: String,
       // unique: true,
       // required: true
    //},
    //emailId: String,
   // gender: {
      //  type: String,
        //enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    //},
    //age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });


module.exports = mongoose.model('Books data', bookSchema) //users



// String, Number
// Boolean, Object/json, array
//const mongoose = require('mongoose');

//const bookSchema = new mongoose.Schema( {
  //  bookName: String,
   // authorName: String,
    //category:String,
    //year:Number,
    
//},// { timestamps: true });


//module.exports = mongoose.model('User', bookSchema) //users
