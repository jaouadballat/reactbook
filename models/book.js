const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    review:{
        type: String,
        default: 'n/a'
    },
    pages:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        min: 1,
        max:5,
        required: true
    },
    price:{
        type: Number, 
        required: true
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});


module.exports = mongoose.model('Book', BookSchema);