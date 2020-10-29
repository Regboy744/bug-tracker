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

// PROJECT VALIDATION
const projectValidation = (data) => {
	const schema = {
		slug: Joi.string().min(3).required(),
		name: Joi.string().min(3).required(),
		description: Joi.string().min(10).required(),
	};
	return Joi.validate(data, schema);
};

// PROJECT UPDATE VALIDATION
const projectUpdateValidation = (data) => {
	const schema = {
		name: Joi.string().min(3).required(),
		description: Joi.string().min(10).required(),
	};
	return Joi.validate(data, schema);
};

module.exports.projectValidation = projectValidation;
module.exports.projectUpdateValidation = projectUpdateValidation;
