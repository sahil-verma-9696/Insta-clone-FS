const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    password : String,
    imgAddress : String,
    posts : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Post'
        }
    ]
});

module.exports = mongoose.model("User",userSchema);