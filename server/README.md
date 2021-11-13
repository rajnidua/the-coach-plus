Queries and Mutations(for Graphql playground)

ADD USER (mutation)

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

Query Variables

```md
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

LOGIN (mutation)

```md
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

{
"email": "rajni@techfriends.dev",
"password":"12345678"
}

ADD COACH (mutation)

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

    QUERY VARIABLES

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

HTTP Headers(For Authentication)

{
"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdGluZ3Rlc3RpbmciLCJlbWFpbCI6InRlc3Rpbmd0ZXN0aW5nQHRlY2hmcmllbmRzLmRldiIsIl9pZCI6IjYxOGY0Zjc5ZTllNDY0MDdhNGMwNDI1NyJ9LCJpYXQiOjE2MzY3ODE5NTcsImV4cCI6MTYzNjc4OTE1N30.t8mLyEYRXYySyiHTzmPOtSWuiYt6Lj6e4EGBshUQajg"

}

ADD TIME SLOT

mutation addtimeSlot( $slotValue: String!,$slotId:String!) {
addtimeSlot( slotValue: $slotValue,slotId:$slotId) {
\_id
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

QUERY VARIABLES

{
"slotValue": "7PM-8PM",
"slotId": "3"
}

ADD DAY

mutation addDay( $dayValue: String!,$dayId:String!) {
addDay( dayValue: $dayValue,dayId:$dayId) {
\_id
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

QUERY VARIABLES

{
"dayValue": "Thursday",
"dayId": "3"
}

COACHES (query)

query coaches {
coaches {
\_id
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

COACH DETAIL

query coachDetail {
coachDetail(coachname:"coco") {
\_id
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

USERS

query users {
users {
\_id
username
email
isCoach
coachProfile{
\_id
coachname
description
}

       }

}

USER(query)

query{
user(username:"rajni"){
\_id
email
username
coachProfile{description}
isCoach

}
}

COACH DETAIL

query coachDetail {
coachDetail(coachname:"coco") {
\_id
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
