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

const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");
const verify = require("../auth/verifyToken");
const { userTypeValidation } = require("../validation/userValidation");

// STATUS CODE

// 500 Internal Server Error
// 201 Something was created
// 200 uccess status response
// 400 Bad request (Server problem)
// 404 Not found

// GET ALL USERS *************************************************************************************************

router.get("/", verify, async (req, res) => {
	try {
		const users = await Users.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// GET AN USER INDIVIDUALLY BY EMAIL *****************************************************************************

router.get("/:email", verify, async (req, res) => {
	const user = await Users.findOne({ email: req.params.email });
	res.json(user);
});

// UPDATE A USER **************************************************************************************************

router.patch("/:email/:password", verify, async (req, res) => {
	// GET THE RIGTH USER BASED IN HIS EMAIL SENDED BY URL
	const user = await Users.findOne({ email: req.params.email });

	//	CHECK IF EMAIL SENDED ON THE URL EXISTS
	if (user == null) return res.status(400).send("Email informed on the URL was not found");

	// VALIDATE THE DATA BEFORE UPDATE
	const { error } = userTypeValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// CHECK IF EMAIL IS ALREADY IN THE DATABASE
	const emailExist = await Users.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already exists");

	// CHECK PASSOWRD IS CORRECT
	const validPass = await bcrypt.compare(req.params.password, user.password);
	if (!validPass) return res.status(400).send("Invalid password");

	// UPDATE USER TYPE
	user.userType = req.body.userType;

	try {
		const updateUser = await user.save();
		res.send(updateUser);
	} catch (error) {
		Response.status(400);
	}
});

module.exports = router;
