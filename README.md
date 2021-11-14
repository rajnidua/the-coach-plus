# CoachPlus

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Video Link](#Video)
- [Screenshot](#Screenshot)
- [Deployment](#Deployment)
- [Heroku Deployment](#Heroku)
- [How to Run](#Run)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)

## Description

Coach+ app bring all sports trainers and students on one platform. You can find the coach that is best for you.
It also provides the people with skills ,who want to become a coach a digital platform through which they can easily connect to their students.

WHEN I arrive on the website
THEN I am greeted with a welcome page that tells you everything about the app.
WHEN I click on login button
THEN I am diverted to a login page where I have option to sign in as well
WHEN I login with correct credentials
THEN I am taken to the homepage with an additional option Student Dashboard
WHEN I click on Student Dashboard button
THEN I am taken to a new page
WHEN I select a sport on this page
THEN I am presented with a list of coaches for that particular coach
WHEN I select another coach
THEN I am presented with coaches for that sport as well
WHEN I unselect a particular sport
THEN that sport is taken away from the list of coaches
WHEN I click on Enroll button
THEN I am taken to a coach detail page, describing about the coach I selected
WHEN I scroll down this page
THEN I see two drop down boxes
WHEN I click the first dropdowm box
THEN I can select the day I want my lesson on from the list of options available
WHEN I click on the second checkbox
THEN I can select the lesson time that suites me
WHEN I click on the Enrol button
THEN I am taken to an Enrollment confirmation page.

## Video

(https://drive.google.com/file/d/1GG7sBmBgh2harQmQDDAtRpZn6eoX5CKr/view?usp=sharing)

## Screenshot

[![Screenshot](./images/CoachPlusScreenshot1.gif)]

## Screenshot

[![Screenshot](./images/CoachPlusScreenshot2.gif)]

## Screenshot

[![Screenshot](./images/CoachPlusScreenshot3.gif)]

## Screenshot

[![Screenshot](./images/CoachPlusScreenshot4.gif)]

## Installation

```md
npx create-react-app the-coach-plus
use the same package.json and run npm install
in another terminal run mongod

For Mongo shell
In the command prompt
run mongosh
showdbs
use theCoachPlusSchema

Also, install Studio 3T
for database, you can import and export data using Studio 3T

For email
run cd client >> npm install validator

npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons

npm install --save @fortawesome/react-fontawesome
//for social icons
npm i --save @fortawesome/free-brands-svg-icons
Import:

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
Use:

<FontAwesomeIcon icon={faBars} />
```

## Run

On Localhost : npm run develop

On Heroku : using heroku link

## Deployment

Reference Documents

set up mongo atlas https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas

Deploy with mongodb and atlas https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas

## Heroku

Create heroku app using

```md
heroku --version
heroku login
heroku create
```

```md
Push to heroku using(push the updated version to Git before doing this)
git add -A
git commit -m 'deploying'
git push heroku main
To run the app from CLI

heroku open
```

## Contributing

Rajni Dua

## Questions

For any further questions, reachout to me at :

- Github: [rajnidua](https://github.com/rajnidua)
- Email: rajni.dua14@gmail.com

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

&copy; 2021 Rajni Dua

_Licensed under [MIT](./license)_
