## Queries and Mutations(for Graphql playground)

**_ADD USER (mutation)_**

```javascript
mutation addUser(
$username: String!
    $password: String!
    $email: String!
    $isCoach: Boolean!
    $houseNumber: String
    $streetName: String
    $postalCode: String
  	$state: String
    $country: String
    $city: String!
  ) {
    addUser(
      input:
      {
      username: $username,
      password:$password,
email: $email,
isCoach: $isCoach,
houseNumber: $houseNumber,
streetName: $streetName,
postalCode: $postalCode,
state: $state,
country: $country,
city: $city,
}
) {
token
user {
username
\_id
email
isCoach
streetName
houseNumber
postalCode
state
country
city

      }
    }
}
```

**_Query Variables_**

```javascript
{
"email": "rajni@techfriends.dev",
"isCoach": false,
"password": "12345678",
"username": "rajni",
"houseNumber": "23",
"streetName": "ashford",
"postalCode": "5307",
"state": "SA",
"country": "Australia",
"city": "parkside"

}
```

---

---

**_LOGIN (mutation)_**

```javascript
mutation login($email: String!, $password: String!) {
login(email: $email, password: $password) {
token
user {
\_id
username
email
isCoach

        houseNumber
        streetName
        postalCode
        state
        country
        coachProfile{
          _id
          coachname
          description
        }


      }
    }

}
```

Query Variables

```javascript
{
"email": "rajni@techfriends.dev",
"password":"12345678"
}
```

---

---

**_ADD COACH (mutation)_**

```javascript
mutation addCoach(
$description: String!
$image: String!
$fees: String
$sport: String
$groupSize:String
$duration:String
$sessionStart: String
$days: [String]

$venuePostalCode:String

  ) {
    addCoach(
      input:
      {
       description:$description
image: $image
    fees: $fees
        sport: $sport
    groupSize:$groupSize
duration:$duration
sessionStart: $sessionStart
days: $days

        venuePostalCode:$venuePostalCode
      }
    ) {

      coachname
         description
    image
    fees
      sport
      duration
      groupSize

    sessionStart
      days{
        dayId
        dayValue
      }

      venuePostalCode
      timeSlot{
        slotId
        slotValue
      }
      userProfile{
        _id
      }

      }
    }
```

**_QUERY VARIABLES_**

```javascript
    {
    "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ",

"image":"fdsvdsfv",
"fees":"250 AUD",
"sport": "Swimming",
"groupSize":"5",
"duration":"10 Weeks",
"sessionStart": "2022-02-05T14:54:54+00:00",

"venuePostalCode": "5223"
}
```

**_HTTP Headers(For Authentication)_**

```javascript
{
"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdGluZ3Rlc3RpbmciLCJlbWFpbCI6InRlc3Rpbmd0ZXN0aW5nQHRlY2hmcmllbmRzLmRldiIsIl9pZCI6IjYxOGY0Zjc5ZTllNDY0MDdhNGMwNDI1NyJ9LCJpYXQiOjE2MzY3ODE5NTcsImV4cCI6MTYzNjc4OTE1N30.t8mLyEYRXYySyiHTzmPOtSWuiYt6Lj6e4EGBshUQajg"
}
```

**_ADD TIME SLOT_**

```javascript
mutation addtimeSlot( $slotValue: String!,$slotId:String!) {
addtimeSlot( slotValue: $slotValue,slotId:$slotId) {
_id
coachname
timeSlot{
slotValue
slotId
}
days{
dayId
dayValue
}
}
}
```

**_QUERY VARIABLES_**

```javascript
{
"slotValue": "7PM-8PM",
"slotId": "3"
}
```

**_ADD DAY_**

```javascript
mutation addDay( $dayValue: String!,$dayId:String!) {
addDay( dayValue: $dayValue,dayId:$dayId) {
_id
coachname
timeSlot{
slotValue
slotId
}
days{
dayId
dayValue
}
}
}
```

**_QUERY VARIABLES_**

```javascript
{
"dayValue": "Thursday",
"dayId": "3"
}
```

---

---

**_COACHES (query)_**

```javascript
query coaches {
coaches {
_id
coachname
description
image
sport
groupSize
duration
fees
sessionStart
days{
dayId
dayValue
}
timeSlot{
slotId
slotValue
}
venuePostalCode
userProfile{

        _id
      }

       }
}
```

---

---

**_COACH DETAIL_**

```javascript
query coachDetail {
coachDetail(coachname:"coco") {
_id
coachname
description
image
fees
timeSlot{
slotId
slotValue
}
userProfile{
username
_id
email

    }

}
}
```

---

---

**_USERS_**

```javascript
query users {
users {
_id
username
email
isCoach
coachProfile{
_id
coachname
description
}
}
}
```

---

---

**_USER(query)_**

```javascript
query{
user(username:"testuser"){
_id
email
username
coachProfile{\_id}
isCoach
programsEnrolled{
coachname
}
enrollOrders{
_id
enrollDate
}
}
}
```

**_Result_**

```javascript
{
"data": {
"user": {
"\_id": "6190f775e2c69744127528f0",
"email": "testuser@gmail.com",
"username": "testuser",
"coachProfile": [],
"isCoach": false,
"programsEnrolled": [
{
"coachname": "Adeltennis"
},
{
"coachname": "unleyswim"
}
],
"enrollOrders": [
{
"_id": "61a0bceada2edf05f2ec5546",
"enrollDate": "1637924074495"
},
{
"_id": "61a0bd11da2edf05f2ec5549",
"enrollDate": "1637924113113"
}
]
}
}
}
```

---

---

**_COACH DETAIL_**

```javascript
query coachDetail {
coachDetail(coachname:"coco") {
_id
coachname
description
image
fees
timeSlot{
slotId
slotValue
}
userProfile{
username
\_id
email

    }

}
}
```

---

---

**_ADD STUDENT ENROLLED_**

```javascript
mutation addStudentEnrolled(
$coachname: String
    ) {
   addStudentEnrolled(
      input:
      {
      coachname:$coachname

      }
    ) {

      coachname
         description
    image
    fees
      sport
      duration
      groupSize

    enrolledStudents{
      username
      email
      _id
    }
      }
}
```

**_QUERY VARIABLES_**

```javascript
{
"coachname": "TennisWorld"
}
```

---

---

**_ADD PROGRAMS ENROLLED_**

```javascript
mutation addProgramsEnrolled(
$coachname: String
    ) {
  addProgramsEnrolled(
      input:
      {
      coachname:$coachname

      }
    ) {

     username
      houseNumber
      _id
}
}
```

```javascript
mutation addProgramsEnrolled(
    $coachname: String

        $sessionStartDate:String
        $classTime:String
        $classDay:String
        $sportName:String
  $fees:Float

    ) {
  addProgramsEnrolled(
      input:
      {
      coachname:$coachname
        sessionStartDate:$sessionStartDate
        classTime:$classTime
        classDay:$classDay
        sportName:$sportName
        fees:$fees

        }
    ) {

     username
      programsEnrolled{
        coachname
        classTime
        classDay
        sportName
        fees

        }
         }
      }

```

**_QUERY VARIABLES_**

```javascript
{
"coachname": "TennisWorld"
}
```

---

---

```javascript
mutation addEnrollOrder($coaches: [ID]!) {
addEnrollOrder(coaches: $coaches) {
enrollDate
coaches {
_id
coachname

        description
        image
        fees
        sport
    }

}
}
```

**_Query Variables_**

```javascript
{
"coaches": "618e092da421015e141598e9"
}
```

**_Result_**

```javascript
{
"data": {
"addEnrollOrder": {
"enrollDate": "1637924113113",
"coaches": [
{
"_id": "618e092da421015e141598e9",
"coachname": null,
"description": null,
"image": null,
"fees": null,
"sport": null
}
]
}
}
}
```

---

---

```javascript
query getCheckout($coaches: [ID]!) {
    checkout(coaches: $coaches) {
      session
    }
  }

```

**_query variables_**

```javascript
{
"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdHVzZXIiLCJlbWFpbCI6InRlc3R1c2VyQGdtYWlsLmNvbSIsIl9pZCI6IjYxOTBmNzc1ZTJjNjk3NDQxMjc1MjhmMCJ9LCJpYXQiOjE2Mzc5ODc0OTQsImV4cCI6MTYzNzk5NDY5NH0.jeNIdlZc8cSt1jSBALsmiB8dOmdDZuGqZ9Po7Q66vBw"
}
```

**_Result_**

```javascript
{
"data": {
"checkout": {
"session": "cs_test_a1maHKabsNsLuP8bfmAhtjELPWz9kka2DtyWS1GFhR04BGhUXyyh6rWhXG"
}
}
}
```
