const db = require("../config/connection");
const { User, Coach } = require("../models");
const userSeeds = require("./userSeeds.json");
const coachSeeds = require("./coachSeeds.json");

db.once("open", async () => {
  try {
    await Coach.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);
    //await Coach.create(coachSeeds);

    /* for (let i = 0; i < coachSeeds.length; i++) {
      const { _id, coachname } = await Coach.create(coachSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: coachname },
        {
          $addToSet: {
            userDetail: _id,
          },
        }
      );
    } */

    /*  for (let i = 0; i < userSeeds.length; i++) {
      const { _id, username } = await User.create(userSeeds[i]);
      const coach = await Coach.findOneAndUpdate(
        { coachname: username },
        {
          $addToSet: {
            userId: _id,
          },
        }
      );
    } */
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
