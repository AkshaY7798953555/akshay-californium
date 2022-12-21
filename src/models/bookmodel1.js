//Create a books collection in your DB ( using bookModel with following fields)- 
//bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , 
//tags array, authorName, totalPages , stockAvailable ( true false)
//create the following API’s (write logic in bookController and routes in routes):
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   bookName:{
    type:String, 
    required: true
     } , 
    
   
    tags: [String],
    authorName: String, 
    totalPages : Number,
    stockAvailable: Boolean,
    
    
    
   prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    year:{
        type:Number,
        default:2021,

    },

    //sales: {type: Number, default: 10}
}, { timestamps: true });





module.exports = mongoose.model('Booklist', bookSchema) //users
