// This is the way we gonna pull the express library
const express = require("express");
// We gonna run the express function and  we will use it on app to run our server.
const app = express();

// Server config
const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

// Now lets require our mongoose library and instance it for mongoose variable.
const mongoose = require("mongoose");

//Connect to the data base using mogoose.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Check if we are connected to the data base if not we will have a error showed
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the database"));

// Listener and returnes if everything is working nice
app.listen(port, hostname, () => {
	console.log(`Server working fine at http://${hostname}:${port}/`);
});

// Set our server to accept jason
app.use(express.json());

//Creating routers
const projectsRouter = require("./routers/projects");
const usersRouter = require("./routers/users");
const issuesRouter = require("./routers/issues");
const commentsRouter = require("./routers/comments");

//PROJECTS
app.use("/projects", projectsRouter);

//USERS
app.use("/users", usersRouter);

//ISSUES
app.use("/issues", issuesRouter);

//COMMENTS
app.use("/comments", commentsRouter);
