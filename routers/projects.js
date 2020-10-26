const express = require("express");
const router = express.Router();
const Projecs = require("../models/projects");

/* 

         ERRORS CODE

- > 500 Internal Server Error
--> 201 Something was created
--> 200 uccess status response
--> 400 Bad request (Server problem)


*/

//Create a new project **********************************************************************************************

router.post("/", async (req, res) => {
	const newProjet = Projecs({
		slug: req.body.slug,
		name: req.body.name,
		descripion: req.body.descripion,
	});
	try {
		const project = await newProjet.save();
		res.status(201).json(project);
	} catch (error) {
		res.status(400).json({ message: err.message });
	}
});

//Get all ***********************************************************************************************************

router.get("/", async (req, res) => {
	try {
		const projects = await Projecs.find();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// Get one project by its ID **************************************************************************************

router.get("/:slug", async (req, res) => {
	const project = await Projecs.findOne({ slug: req.params.slug });
	res.json(project);
});

// Update a project ***********************************************************************************************

router.patch("/:slug", getProjects, async (req, res) => {
	// First thing check if the req exists
	if (req.body.name != null || req.body.descripion != null) {
		res.project.name = req.body.name;
		res.project.descripion = req.body.descripion;
	}
	try {
		const updateProjects = await res.project.save();
		res.json(updateProjects);
	} catch (error) {
		Response.status(400);
	}
});

// It gets the id individualy and check if it exists **************************************************************

async function getProjects(req, res, next) {
	let project;
	try {
		project = await Projecs.findOne({ slug: req.params.slug });
		if (project == null) {
			return res.status(404).json({ message: err.message });
		}
	} catch (error) {
		return res.status(500).json({ message: err.message });
	}
	res.project = project;
	next();
}

module.exports = router;
