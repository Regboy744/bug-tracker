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

const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation/userValidation");

// STATUS CODE

// 500 Internal Server Error
// 201 Something was created
// 200 uccess status response
// 400 Bad request (Server problem)

// ADD NEW USER INDIVIDUALLY *************************************************************************************

router.post("/register", async (req, res) => {
	// LETS VALIDATE THE DATA BEFORE CREATE A NEW USER
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// CHECK IF EMAIL IS ALREADY IN THE DATABASE
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already exists");

	// HASH PASSWORDS
	const salt = await bcrypt.genSalt(10);
	const hashedPassord = await bcrypt.hash(req.body.password, salt);

	// CREATE A NEW USER
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		userType: req.body.userType,
		password: hashedPassord,
	});
	try {
		const saveUser = await user.save();
		res.send(saveUser);
	} catch (error) {
		res.status(400).send(err);
	}
});

// LOGIN  *******************************************************************************************************

router.post("/login", async (req, res) => {
	// LETS VALIDATE THE DATA BEFORE LOGIN
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// CHECK IF EMAIL IS ALREADY IN THE DATABASE
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email not found");

	// CHECK PASSOWRD IS CORRECT
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid password");

	//CREATE AND ASIGN A TOKEN
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRECT);
	res.header("auth-token", token).send(token);
});

module.exports = router;
