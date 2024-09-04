// const cookieParser = require('cookie-parser')
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

// app.use(cookieParser())

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("polololo", salt, function (err, hash) {
      console.log(hash);
    });
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
