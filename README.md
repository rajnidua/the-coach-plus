# Signup

# mutation typeDef

```md
mutation AddUser($username: String!, $email: String!, $password: String!,$role: String!) {
addUser(username:$username,email: $email, password:$password, role:$role){
user {
\_id(ignore the \ while writing mutation)
username
email
role

    }

}
}
```

# Query Variables:

{
"username":"ghgh",
"email": "ghgh@ghgh.com",
"password": "password123",
"role" :"Coach"
}

# Result

{
"data": {
"addUser": {
"user": {
"\_id": "618482c77d84653fd7dc0f4d",
"username": "abcdef",
"email": "abcdef@abcdef.com",
"role": "Coach"
}
}
}
}

# Login

# Mutation

mutation login($email: String!, $password: String!) {
login(email: $email, password: $password) {
token
user {
\_id
username
}
}
}

# Query Variables

{
"email": "ghgh@ghgh.com",
"password": "password123"
}

# Result

{
"data": {
"login": {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiZ2hnaCIsImVtYWlsIjoiZ2hnaEBnaGdoLmNvbSIsIl9pZCI6IjYxODQ5NzIwZThhNWI3NDM5ZTc2YzJjNiJ9LCJpYXQiOjE2MzYwNzk1MzAsImV4cCI6MTYzNjA4NjczMH0.Og0YBL_GcmbkgrZ-fY64lpQaWbhgzdo33Q9K6-A-bTs",
"user": {
"\_id": "61849720e8a5b7439e76c2c6",
"username": "ghgh"
}
}
}
}

# me (Get user information)

# Query

query me {
me {
\_id
username
email
role
}
}

# HTTP Headers

{
"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiZ2hnaCIsImVtYWlsIjoiZ2hnaEBnaGdoLmNvbSIsIl9pZCI6IjYxODQ5NzIwZThhNWI3NDM5ZTc2YzJjNiJ9LCJpYXQiOjE2MzYwNzk1MzAsImV4cCI6MTYzNjA4NjczMH0.Og0YBL_GcmbkgrZ-fY64lpQaWbhgzdo33Q9K6-A-bTs"
}

# Result

{
"data": {
"me": {
"\_id": "61849720e8a5b7439e76c2c6",
"username": "ghgh",
"email": "ghgh@ghgh.com",
"role": "Coach"
}
}
}

# Get All Users

Query : users
This will return details of all users except from the password

```md
query users {
users {
\_id
username
email
role
}
}
```

# Get One User (from username)

Query

```md
query{
user(username: "Brian Kernighan"){
\_id
email
username
}
}
```

# Result

{
"data": {
"user": {
"\_id": "6184775495cef53d935b8545",
"email": "bkernighan@techfriends.dev",
"username": "Brian Kernighan"
}
}
}
