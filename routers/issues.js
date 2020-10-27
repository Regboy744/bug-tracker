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
const Issues = require("../models/issues");
const Project = require("../models/projects");

/*

         ERRORS CODE

- > 500 Internal Server Error
--> 201 Something was created
--> 200 uccess status response
--> 400 Bad request (Server problem)
--> 404 Not Found


*/

// ADD A NEW ISSUE TO A PROJECT INDIVIDUALLY *****************************************************************

router.post("/project/:slug", async (req, res) => {
	const project = await Project.find({ slug: req.params.slug });
	let count = countIssues(req.params.slug);
	try {
		if (project != null) {
			const newIssue = Issues({
				issueNumber: req.params.slug + "_" + ((await count) + 1),
				text: req.body.text,
				description: req.body.description,
				status: req.body.status,
				projectId: req.params.slug,
			});
			const issue = await newIssue.save();
			res.status(201).json(issue);
		} else {
			res.status(400).json({ message: "Project does not exist" });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// UPDATED THE STATUS OF AN ISSUE *****************************************************************************

router.patch("/:issueNumber", getIssue, async (req, res) => {
	// First thing check if the req exists
	if (req.body.status != null) {
		res.issue.status = req.body.status;
	}
	console.log(req.body.status);
	try {
		const updateIssue = await res.issue.save();
		res.json(updateIssue);
	} catch (error) {
		Response.status(400);
	}
});

// GET ALL ISSUES (WITH COMMENTS) ******************************************************************************

router.get("/", async (req, res) => {
	try {
		const issue = await Issues.find({});
		res.json(issue);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// COUNT HOW MANY ISSUES THERE ARE IN EACH PROJECT *************************************************************

async function countIssues(projectId) {
	const countIssue = await Issues.find({ projectId });
	const sum = countIssue.length;
	console.log(sum);
	return sum;
}

// GET INDIVIDUAL ISSUES ***************************************************************************************

router.get("/:issueNumber", async (req, res) => {
	const issue = await Issues.findOne({ issueNumber: req.params.issueNumber });
	res.json(issue);
});

// GET ALL ISSUES FOR A PROJECT ********************************************************************************

router.get("/projects/:projectId", async (req, res) => {
	const issuesQuery = await Issues.find({ projectId: req.params.projectId });
	res.json(issuesQuery);
});

// THE CODE BELLOW CHECK IF THE PROJECT EXIST THEN I USE IT TO UPDATE THE ISSUE *********************************

async function getIssue(req, res, next) {
	let issue;
	try {
		issue = await Issues.findOne({ issueNumber: req.params.issueNumber });
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
