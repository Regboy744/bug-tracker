/******************************************************************************************************************
* Project           : Clouw Based Web Application CCT College Dublin
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

const usertSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	userType: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		min: 1024,
		max: 6,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("User", usertSchema);
