// Validation
const Joi = require("@hapi/joi");

// Register Validation
const projectValidation = (data) => {
	const schema = {
		slug: Joi.string().min(3).required(),
		name: Joi.string().min(3).required(),
		description: Joi.string().min(10).required(),
	};
	return Joi.validate(data, schema);
};

// Register Validation
const projectUpdateValidation = (data) => {
	const schema = {
		name: Joi.string().min(3).required(),
		description: Joi.string().min(10).required(),
	};
	return Joi.validate(data, schema);
};

module.exports.projectValidation = projectValidation;
module.exports.projectUpdateValidation = projectUpdateValidation;
