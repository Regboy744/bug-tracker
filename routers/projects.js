/******************************************************************************************************************
* Project           : Cloud Based Web Application CCT College Dublin
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
const Projecs = require("../models/projects");
const verify = require("../auth/verifyToken");
const { projectValidation, projectUpdateValidation } = require("../validation/projectValidation");

// STATUS CODE

// 500 Internal Server Error
// 201 Something was created
// 200 uccess status response
// 400 Bad request (Server problem)
// 404 Not found

//ADD A NEW PROJECT INDIVIDUALLY  *********************************************************************************

router.post("/", verify, async (req, res) => {
	// VALIDATE THE DATA BEFORE CREATE
	const { error } = projectValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// CHECK IF A PROJECT IF SAME NAME EXISTS IN THE DB
	const project = await Projecs.findOne({ slug: req.body.slug });
	if (project) return res.status(400).send("This slug already existe, please pick another one");

	const newProjet = Projecs({
		slug: req.body.slug,
		name: req.body.name,
		description: req.body.description,
	});
	try {
		const project = await newProjet.save();
		res.status(201).json(project);
	} catch (error) {
		res.status(400).json({ message: err.message });
	}
});

//GET ALL PROJECTS ************************************************************************************************

router.get("/", verify, async (req, res) => {
	try {
		const projects = await Projecs.find();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// GET INDIVIDUAL PROJECTS ****************************************************************************************

router.get("/:slug", verify, async (req, res) => {
	const project = await Projecs.findOne({ slug: req.params.slug });
	res.json(project);
});

// UPDATE A PROJECT BY ID (SLUG) ***********************************************************************************

router.patch("/:slug", verify, async (req, res) => {
	// GET THE RIGTH PROJECT BASED IN ITS SLUG SENDED BY URL
	const project = await Projecs.findOne({ slug: req.params.slug });

	//	CHECK IF SLUG SENDED ON THE URL EXISTS
	if (!project) return res.status(400).send("Project was not found");

	// VALIDATE THE DATA BEFORE UPDATE
	const { error } = projectUpdateValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// UPDATE PROJECT
	project.name = req.body.name;
	project.description = req.body.description;

	try {
		const updateProjects = await project.save();
		res.json(updateProjects);
	} catch (error) {
		Response.status(400);
	}
});

module.exports = router;
