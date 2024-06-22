const mongoose = require("mongoose");

async function connectDB(dbname) {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${dbname}`);
}

module.exports = { connectDB }