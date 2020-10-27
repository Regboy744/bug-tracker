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
const Comment = require("../models/comment");

/*

         ERRORS CODE

- > 500 Internal Server Error
--> 201 Something was created
--> 200 uccess status response
--> 400 Bad request (Server problem)
--> 404 Not Found


*/

// ADD A NEW  ******************************************************************************************************

router.post("/:issueNumber", async (req, res, next) => {
	try {
		const issue = await Issues.findOne({ issueNumber: req.params.issueNumber });

		if (issue != null) {
			const comment = Comment({
				comment: req.body.comment,
				author: req.body.author,
			});
			issue.comments.push(comment);
			issue.save();
			return res.status(200).json(issue);
		} else {
			// This should never happen
			return res.status(404).json({ error: "Isuue not found" });
		}
	} catch (error) {
		return res.status(500).json(error.message);
	}
});

// GET COMMENTS BY ISSUE *******************************************************************************************

router.get("/:issueNumber", async (req, res) => {
	const issuesQuery = await Issues.findOne({ issueNumber: req.params.issueNumber });
	res.json(issuesQuery.comments);
});

// GET A SPECIFIC COMMENT BY ISSUE AND COMMENT ID *****************************************************************

router.get("/:issueNumber/:commentId", async (req, res) => {
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

module.exports = router;
