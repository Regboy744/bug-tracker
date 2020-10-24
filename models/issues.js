const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	comment: String,
});

const issueSchema = new mongoose.Schema({
	issueNumber: String,
	text: String,
	description: String,
	status: String,
	// project_id = [commentSchema]
});

module.exports = mongoose.model("Issue", issueSchema);
