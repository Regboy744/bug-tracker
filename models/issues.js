const mongoose = require("mongoose");
const commentSchema = require("./comment").schema;
const projectSchema = require("./projects").schema;

const issueSchema = new mongoose.Schema({
	issueNumber: {},
	text: String,
	description: String,
	status: String,
	projectId: [{ type: mongoose.SchemaTypes.Mixed, ref: projectSchema }],
	comments: [commentSchema],
});

module.exports = mongoose.model("Issue", issueSchema);
