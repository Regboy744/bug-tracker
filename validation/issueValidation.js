// Validation
const Joi = require("@hapi/joi");

// Issue Validation
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
