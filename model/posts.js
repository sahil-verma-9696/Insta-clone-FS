const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : String,
    img : String,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },

    likes : [
        {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
    ]
})

module.exports = mongoose.model("Post",postSchema);