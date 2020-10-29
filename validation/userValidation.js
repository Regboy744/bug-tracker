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

//  VALIDATION
const Joi = require("@hapi/joi");

// REGISTER VALIDATION
const registerValidation = (data) => {
	const schema = {
		name: Joi.string().min(5).required(),
		email: Joi.string().min(6).required().email(),
		userType: Joi.string().min(3).required(),
		password: Joi.string().min(6).required(),
	};
	return Joi.validate(data, schema);
};

// LOGIN VALIDATION
const loginValidation = (data) => {
	const schema = {
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	};
	return Joi.validate(data, schema);
};

// UPDATE USER TYPE
const userTypeValidation = (data) => {
	const schema = {
		userType: Joi.string().min(3).required(),
	};
	return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.userTypeValidation = userTypeValidation;
