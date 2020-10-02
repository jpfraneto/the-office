var mongoose = require("mongoose");

var ideaSchema = new mongoose.Schema({
    name: String,
    date: String,
    description: String,
    why: String,
    who: String,
    value: String,
    scale: Number,
    addedBy: String
}); 

module.exports = mongoose.model("Idea", ideaSchema);