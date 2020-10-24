const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	slug: String,
	name: String,
	descripion: String,
});

module.exports = mongoose.model("Project", projectSchema);
