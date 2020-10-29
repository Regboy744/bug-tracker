// Validation
const Joi = require("@hapi/joi");

// Register Validation
const registerValidation = (data) => {
	const schema = {
		name: Joi.string().min(5).required(),
		email: Joi.string().min(6).required().email(),
		userType: Joi.string().min(3).required(),
		password: Joi.string().min(6).required(),
	};
	return Joi.validate(data, schema);
};

// Login Validation
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
