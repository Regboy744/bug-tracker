# Bug-tracker

# Table of Content

1. [The main route](#the-main-route)
2. [Register and Login](#register-and-login)
3. [Projects Routes](#projects)
4. [Users Routes](#users)
5. [Issues Routes](#issues)
6. [Comments Routes](#comments)

# What this project does

It is an API where we can register the bugs we come across while developing a program.

# Getting Set Up

### Clone The Repo

git clone https://github.com/ThomasMcDonnell/dj_flat_share.git

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

![alt text](https://ucc991cac85831886b62b4665307.previews.dropboxusercontent.com/p/thumb/AA8ydEDDPjP8R1D7DcxWiGwI0d7Q1lTp58edCvyA5qsIp4Ql4EyvJ9Xtejrf1yQEcl7gGvbPLwMBUdxISfI_bztX1svvS5f_YrY-hX07RxGjAN__DmA7TcQbgeOabpf4GCUeP_o2x-kOysQSr3D4UHtvjaBDpSVNndPs0LSt-cFGpCSaZaWZDW4H4TNKLNLmbOiooy64pHh2V-uOjpMXZfrbxMOsAn-66Zp9xYY6GxohUGVWmSGtFe-wmkToICJTISAM4nweF0LbD1oegiRrdQ-yHVEliCD1bdtkkZe6vUmZFxxd8NRRDoRat9i9kVGIs3OX3WKP6VdYoOIg8bg6FhvCOEQJBgtJabSnborHf0sB8Vo5o6Vz98zb-tQYw8N3qjoTIutlkpLFLKlU4tSsqnht/p.png?fv_content=true&size_mode=5)

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
