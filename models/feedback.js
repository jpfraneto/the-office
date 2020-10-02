var mongoose = require("mongoose");

var feedbackSchema = new mongoose.Schema({
    name:String,
    date: String,
    feedback: String,
    recommendation: String,
    email: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);