# Bug-tracker

# ROUTES

## Projects

##### DONE: Get all projects `{GET} /projects`

##### DONE: Get individual projects `{GET} /projects/BOOK `

##### DONE: Add new Projects individually `{POST}/projects/`

```
{
"slug": "BOOK",
"name": "BOOK SOFTWARE MANAGEMENT BUG",
"descripion": "Control the chaos around solving software bugs.
Quickly diagnose problems in your codebase, enjoy faster development
cycles and make sure users are having error free experiences."
}
```

##### DONE: Update a Project `{POST}/projects/BOOK`

###### It is not possible to change the slug because it must be unique

```
{
"name": "HOTEL SOFTWARE MANAGEMENT BUG",
"descripion": "Control the chaos around solving software bugs.
 Quickly diagnose problems in your codebase, enjoy faster development
 cycles and make sure users are having error free experiences."
}

```

---

## Users

##### DONE: Get all users `{GET}/users/ `

##### DONE: Get individual users `{GET}/user_email@gmail.com`

##### DONE: Add new users individually ` {POST}/users`

```
{
"name": "John",
"email": "user_email@gmail.com",
"userType": "admin",
"key": "123456"
}
```

##### DONE: Update a users ` {PATCH}/users/user_email@gmail.com`

```
{
"name": "Gilberto",
"userType": "Admin",
"key": "741258"
}
```

---

## Issues

##### DONE: Get all issues (bring comments with it) `{GET}/issues`

##### DONE: Get individual issues `{GET}/issues/BUG_1`

##### DONE Get all issues for a project `{GET}/issues/projects/BOOK`

##### BONUS: Updated the status of an issue `{PATCH}/issues/BUG_1`

##### DONE Add new issues to a project individually `{POST}/issues/BOOK`

```
{
"text": "First Issue on BUG Project",
"description": "Exception 12345",
"status": "Open"
}
```

---

## Comments

##### DONE Get all comments for an issue `{GET}/comments/BUG_1`

##### DONE Get individual comments for an issue `{GET}/comments/BUG_1/{COMMENT-ID}`

##### DONE Add new comments to an issue `{POST}/comments/BUG_1`

```
{
"comment":"Novo asdfasdfadsf",
"author":"carvalho.ie18@gmail.com"
}
```
