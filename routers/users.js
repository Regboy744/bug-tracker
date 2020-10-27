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
* Purpose           : Learn the basic foundation of a Rest API development.
*
* Revision History  :  V1*
*
|******************************************************************************************************************/

const express = require("express");
const router = express.Router();
const Users = require("../models/users");

/* 

         ERRORS CODE

- > 500 Internal Server Error
--> 201 Something was created
--> 200 uccess status response
--> 400 Bad request (Server problem)


*/

// ADD NEW USER INDIVIDUALLY *************************************************************************************

router.post("/", async (req, res) => {
	const newUser = Users({
		name: req.body.name,
		email: req.body.email,
		userType: req.body.userType,
		key: req.body.key,
		// project_id = req.body.project_id,
	});
	try {
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: err.message });
	}
});

// GET ALL USERS *************************************************************************************************

router.get("/", async (req, res) => {
	try {
		const users = await Users.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// GET AN USER INDIVIDUALLY BY EMAIL *****************************************************************************

router.get("/:email", async (req, res) => {
	const user = await Users.findOne({ email: req.params.email });
	res.json(user);
});

// UPDATE A USER **************************************************************************************************

router.patch("/:email", getUsers, async (req, res) => {
	// First thing check if the req exists
	if (req.body.name != null || req.body.userType != null) {
		res.user.name = req.body.name;
		res.user.userType = req.body.userType;
	}
	try {
		const updateUser = await res.user.save();
		res.json(updateUser);
	} catch (error) {
		Response.status(400);
	}
});

// THE CODE BELLOW CHECK IF THE USER EXIST THEN I USE IT TO UPDATE THE USER ***************************************

async function getUsers(req, res, next) {
	let user;
	try {
		user = await Users.findOne({ email: req.params.email });
		if (user == null) {
			return res.status(404).json({ message: err.message });
		}
	} catch (error) {
		return res.status(500).json({ message: err.message });
	}
	res.user = user;
	next();
}

module.exports = router;
