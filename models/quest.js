var mongoose = require("mongoose");

var questSchema = new mongoose.Schema({
    name:String,
    description: String,
    date: String,
    how: String,
    functionality: String,
});

module.exports = mongoose.model("Quest", questSchema);