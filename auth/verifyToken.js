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
