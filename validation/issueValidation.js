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

// VALIDATION
const Joi = require("@hapi/joi");

// ISSUE VALIDATION
const issueValidation = (data) => {
	const schema = {
		text: Joi.string().min(6).required(),
		description: Joi.string().min(10).required(),
		status: Joi.string().min(4).required(),
	};
	return Joi.validate(data, schema);
};

// ISSUE UPDATE VALIDATION
const issueUpdateValidation = (data) => {
	const schema = {
		status: Joi.string().min(4).required(),
	};
	return Joi.validate(data, schema);
};

module.exports.issueValidation = issueValidation;
module.exports.issueUpdateValidation = issueUpdateValidation;
