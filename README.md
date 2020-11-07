# Bug-tracker

# Table of Content

- [What this project does](#What-this-project-does)
- [Getting Set Up](#Getting-Set-Up)
- [Technologies used](#Technologies-used)
- [The main route](#the-main-route)
- [Register and Login](#register-and-login)
- [Projects Routes](#projects)
- [Users Routes](#users)
- [Issues Routes](#issues)
- [Comments Routes](#comments)
- [Status](#Status)
- [Contact](#Contact)

# What this project does

It is an API where we can register the bugs we come across while developing a program.

# Getting Set Up

### Clone The Repo

git clone https://github.com/Regboy744/bug-tracker.git

### Install dependences

- "@hapi/joi": "^15.0.3",
- "bcrypt": "^5.0.0",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "jsonwebtoken": "^8.5.1",
- "mongoose": "^5.10.10",
- "nodemon": "^2.0.6"

### Running app

- "main": "server.js",

# Technologies used

In this project we have used:

- nodeJs.
- Mongo Db.
- VsCode.
- Java Script.
- Github.
- Heroku.

# The main route

[https://bugs-tracker.herokuapp.com/](https://bugs-tracker.herokuapp.com/).

# Register and Login

#### First thing first please register yourself on the API

##### DONE: Register new user `{POST}/auth/user/register`

```
{
"name": "User_Name",
"email": "email@cct.com",
"userType": "Admin",
"password": "123456"
}
```

#### SEcond step login with the e-mail and password informed on your subscription

##### DONE: Login `{POST} auth/user/login`

```
{
"email": "email@cct.com",
"password": "123456"
}
```

##### After logged in a token will be generated "auth-token" please copy this token and paste it on the Postman to open a section and acces the routers

![alt text](https://raw.githubusercontent.com/Regboy744/bug-tracker/main/images/Screenshot%20from%202020-10-29%2003-25-04.png)

# Rotes

## Projects

##### DONE: Add new Projects individually `{POST}/projects/`

```
{
"slug": "BOOK",
"name": "BOOK SOFTWARE MANAGEMENT BUG",
"description": "Control the chaos around solving software bugs.
Quickly diagnose problems in your codebase, enjoy faster development
cycles and make sure users are having error free experiences."
}
```

##### DONE: Get all projects `{GET} /projects`

##### DONE: Get individual projects `{GET} /projects/{slug} `

##### DONE: Update a Project `{PATCH}/projects/{slug}`

###### It is not possible to change the project slug because it must be unique

```
{
"name": "BOOK SOFTWARE MANAGEMENT BUG THE BEST",
"description": "Control the chaos around solving software bugs. Quickly diagnose problems in your codebase, enjoy faster development cycles and make sure users are having error free experiences."
}
```

## Users

##### DONE: Get all users `{GET}/users/ `

##### DONE: Get individual users `{GET}/{email}`

##### DONE: Update a usersType` {PATCH}/users/{email}/{password}`

```
{
"userType": "User"
}
```

---

## Issues

##### DONE Add new issues to a project individually `{POST}/issues/{slug}`

```
{
"text": "First Issue on BUG Project",
"description": "Exception 12345",
"status": "Open"
}
```

##### DONE: Get all issues (bring comments with it) `{GET}/issues`

##### DONE: Get individual issues `{GET}/issues/{issueNumber}`

##### DONE Get all issues for a project `{GET}/issues/projects/{slug}`

##### BONUS: Updated the status of an issue `{PATCH}/issues/{issueNumber}`

```
{
"status": "Open"
}
```

---

## Comments

##### DONE Add new comments to an issue `{POST}/comments/{issueNumber}`

```
{
"comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"author":"valid_email@gmail.com"
}
```

##### DONE Get all comments `{GET}/comments`

##### DONE Get all comments for an Author `{GET}/comments/author/{email}`

##### DONE Get all comments for an issue `{GET}/comments/{issueNumber}`

##### DONE Get individual comments for an issue `{GET}/comments/{issueNumber}/{comment_Id}`

# Status

Project is: in progress.

# Contact

Created by Gilberto Junior carvalho.ie@gmail.com
