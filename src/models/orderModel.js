const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    productId: {
        type: ObjectId,
        ref: "akshayProduct"
    }, 
    userId: {
        type: ObjectId,
        ref: "AkshaysUsers"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
}, { timestamps: true });


module.exports = mongoose.model('AkshayOrder', orderSchema)
