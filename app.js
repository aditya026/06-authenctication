// const cookieParser = require('cookie-parser')
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

// app.use(cookieParser())

app.get("/", (req, res) => {
    bcrypt.compare("polololo", "$2b$10$ypwqZvWP2JToecByU.yMYuhQTLLntkHsQJqepBL9g/lq7L3TuyzWO", function(err, result) {
        console.log(result)
    });
});

app.listen(3000, () => {
  console.log("server is running");
});
