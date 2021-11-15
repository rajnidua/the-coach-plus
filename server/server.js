const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const db = require("./config/connection");

require("dotenv").config();

const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail");
const apiKey = process.env.SENDGRID_API_KEY;

const PORT = process.env.PORT || 3001;
const app = express();

sgMail.setApiKey(apiKey);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Send Email using SendGrid
app.post("/send-email", (req, res, next) => {
  console.log(req.body);

  console.log("got the request to send email");
  // Sendgrid msg requirements
  const msg = {
    to: req.body.email,
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.message,
    html: req.body.message,
  };
  console.log("message is" + msg);
  //Send Email
  sgMail
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

db.once("open", async () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
