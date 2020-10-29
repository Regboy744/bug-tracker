/******************************************************************************************************************
* Project           : Cloud Based Web Application CCT College Dublin
*
* Program name      : Bug-Tracker
*
* Author            : Gilberto Rodrigues de Carvalho Junior
*
* Register:         : 2020090
*
* Date created      : 26/10/2020
*
* Last Update       : 29/10/2020
*
* Purpose           : Learn the basic foundation of a Rest API development.
*
* Revision History  :  V2*
*
|******************************************************************************************************************/

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
