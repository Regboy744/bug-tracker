const express = require("express");
const router = express.Router();
const Issues = require("../models/issues");

/* 

         ERRORS CODE

- > 500 Internal Server Error
--> 201 Something was created
--> 200 uccess status response
--> 400 Bad request (Server problem)
--> 404 Not Found


*/

//Create a new project **********************************************************************************************

router.post("/", async (req, res) => {
	const newIssue = Issues({
		issueNumber: req.body.issueNumber,
		text: req.body.text,
		description: req.body.description,
		status: req.body.status,
		// project_id = {type: mongoose.SchemaTypes.ObjectId, ref: "User"}
	});
	try {
		const issue = await newIssue.save();
		res.status(201).json(issue);
	} catch (error) {
		res.status(400).json({ message: err.message });
	}
});

//Get all ***********************************************************************************************************

router.get("/", async (req, res) => {
	try {
		const issue = await Issues.find();
		res.json(issue);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// Get one project by its ID **************************************************************************************

router.get("/:id", getIssue, (req, res) => {
	res.json(res.issue.issueNumber);
});

// Create a comment  **********************************************************************************************

router.get("/:id", getIssue, (req, res) => {
	if (req.body.iss) {
	}
});

// It gets the id individualy and check if it exists ***************************************************************

async function getIssue(req, res, next) {
	let issue;
	try {
		issue = await Issues.findById(req.params.id);
		if (issue == null) {
			return res.status(404).json({ message: err.message });
		}
	} catch (error) {
		return res.status(500).json({ message: err.message });
	}
	res.issue = issue;
	next();
}

module.exports = router;
