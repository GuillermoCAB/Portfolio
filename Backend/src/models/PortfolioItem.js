const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    tools: String,
});

module.exports = mongoose.model( 'Item', ItemSchema );