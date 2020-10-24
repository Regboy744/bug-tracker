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

//Create a new user **********************************************************************************************

router.post("/", async (req, res) => {
	const newUser = Users({
		name: req.body.name,
		email: req.body.email,
		userType: req.body.userType,
		// project_id = req.body.project_id,
	});
	try {
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: err.message });
	}
});

//Get all ******************************************************************************************************

router.get("/", async (req, res) => {
	try {
		const users = await Users.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// Get one user by its ID **************************************************************************************

router.get("/:id", getUsers, (req, res) => {
	res.json(res.user);
});

// Update a User ***********************************************************************************************

router.patch("/:id", getUsers, async (req, res) => {
	// First thing check if the req exists
	if (req.body.name != null || req.body.userType != null || req.body.email != null) {
		res.user.name = req.body.name;
		res.user.userType = req.body.userType;
		res.user.email = req.body.email;
	}
	try {
		const updateUser = await res.user.save();
		res.json(updateUser);
	} catch (error) {
		Response.status(400);
	}
});

// Delete a user ************************************************************************************************

router.delete("/:id", getUsers, async (req, res) => {
	try {
		await res.user.remove();
		res.json({ message: "Project deleted" });
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// It gets the id individualy and check if it exists ************************************************************

async function getUsers(req, res, next) {
	let user;
	try {
		user = await Users.findById(req.params.id);
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
