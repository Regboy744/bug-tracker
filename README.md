# Bug-tracker

#### The main route [https://bugs-tracker.herokuapp.com/](https://bugs-tracker.herokuapp.com/).

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

#### Scond step login with the e-mail and password informed on your subscription

##### DONE: Login `{POST} auth/user/login`

```
{
"email": "carvalho@gmail.com",
"password": "3000185"
}
```

##### After logged in a token will be generated "auth-token" please copy this token and paste it on the Postman to open a section and acces the routers

![alt text](https://www.dropbox.com/s/jri8y1egzqsfxpf/Screenshot%20from%202020-10-29%2003-25-04.png?dl=0)

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

##### DONE Get all comments for an issue `{GET}/comments/{issueNumber}`

##### DONE Get individual comments for an issue `{GET}/comments/{issueNumber}/{comment_Id}`
