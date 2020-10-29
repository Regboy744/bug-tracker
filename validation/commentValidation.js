// Validation
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
