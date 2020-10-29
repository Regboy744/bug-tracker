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

// COMMENT VALIDATION
const commentValidation = (data) => {
	const schema = {
		comment: Joi.string().min(10).required(),
		author: Joi.string().min(4).required().email(),
	};
	return Joi.validate(data, schema);
};

module.exports.commentValidation = commentValidation;
