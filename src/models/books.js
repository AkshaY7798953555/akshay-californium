const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

name:Number,
author_id:Number,
price:Number,
ratings:Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)