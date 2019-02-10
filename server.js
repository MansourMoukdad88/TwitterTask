const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// var items = require('../databaseSQL');
// var items = require('../databaseMongoDB');

const SELECT_ALL_TWEETS_QUERY = "SELECT * FROM mansour";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mansour"
});

//===============ERROR OR CONNECTING=================
connection.connect(err => {
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  } else {
    console.log("CONNECTED !!!");
  }
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Go to /tweets to see tweets");
});
//====================GET FROM DB===========================
app.get("/tweets", (req, res) => {
  connection.query(SELECT_ALL_TWEETS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
      //return res.send("aaaaa")
    }
  });
});
//================POST=========================
app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});
//=============================================
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
