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
const Projecs = require("../models/projects");

/* 
         ERRORS CODE STATUS

- > 500 Internal Server Error
--> 201 Something was created
--> 200 uccess status response
--> 400 Bad request (Server problem)
 
*/

//ADD A NEW PROJECT INDIVIDUALLY  *********************************************************************************

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

//GET ALL PROJECTS ************************************************************************************************

router.get("/", async (req, res) => {
	try {
		const projects = await Projecs.find();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// GET INDIVIDUAL PROJECTS ****************************************************************************************

router.get("/:slug", async (req, res) => {
	const project = await Projecs.findOne({ slug: req.params.slug });
	res.json(project);
});

// UPDATE A PROJECT BY ID (SLUG) ***********************************************************************************

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

// THE CODE BELLOW CHECK IF THE PROJECT EXIST THEN I USE IT TO UPDATE THE PROJECT *********************************

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
