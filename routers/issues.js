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

//Create a new Issue **********************************************************************************************

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

//Update Issue **********************************************************************************************

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

//Get all *********************************************************************************************************

router.get("/", async (req, res) => {
	try {
		const issue = await Issues.find({});
		res.json(issue);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Count how maany issues exists in each project base on the project ID (BOOK/BUG)

async function countIssues(projectId) {
	const countIssue = await Issues.find({ projectId });
	const sum = countIssue.length;
	console.log(sum);
	return sum;
}

// Get one ISSUE by its ID **************************************************************************************

router.get("/:issueNumber", async (req, res) => {
	const issue = await Issues.findOne({ issueNumber: req.params.issueNumber });
	res.json(issue);
});

//Get All issues for a project ************************************************************************************

router.get("/projects/:projectId", async (req, res) => {
	const issuesQuery = await Issues.find({ projectId: req.params.projectId });
	res.json(issuesQuery);
});

//Get All comments for a issue ************************************************************************************

router.get("/comments/:issueNumber", async (req, res) => {
	const issuesQuery = await Issues.findOne({ issueNumber: req.params.issueNumber });
	res.json(issuesQuery.comments);
});

//Get a especific comment for a issue ************************************************************************************

router.get("/:issueNumber/comments/:commentId", async (req, res) => {
	const issuesQuery = await Issues.findOne({ issueNumber: req.params.issueNumber });
	let comment;
	for (let i = 0; i < issuesQuery.comments.length; i++) {
		const commentId = issuesQuery.comments[i]._id;

		if (commentId == req.params.commentId) {
			comment = issuesQuery.comments[i];
		}
	}
	res.json(comment);
});

// It gets the id individualy and check if it exists **************************************************************

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
