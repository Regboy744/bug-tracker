const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Acces denied. Please login fisrt");

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRECT);
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send("invalid token");
	}
};
