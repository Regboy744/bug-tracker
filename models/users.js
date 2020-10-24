const mongoose = require("mongoose");

const usertSchema = new mongoose.Schema({
	name: String,
	email: String,
	userType: String,
	// project_id = {type: mongoose.SchemaTypes.ObjectId, ref: "Issue"}
});

module.exports = mongoose.model("User", usertSchema);
