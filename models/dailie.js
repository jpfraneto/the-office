var mongoose = require("mongoose");

var dailieSchema = new mongoose.Schema({
    index:Number,
    date: String,
    gitcommit: String,
    description: String,
    feeling: Number,
});

module.exports = mongoose.model("Dailie", dailieSchema);