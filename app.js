
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');


//Konfigurasi agar server dapat melihat folder public
app.use(express.static("public"));

//Setting EJS
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));



app.use(bodyParser.urlencoded({ extended: true }));

const options = {
    apis: ["./routes/*.js"],
  };

const authUsers = require("./routes/authUsers");
// const loginUsers = require("./routes/login");

app.use(bodyParser.json());
app.use(authUsers);
// app.use(loginUsers);

app.get("/", (req, res) => {
    console.log("Response success");
    // res.send("Berhasil Menggunakan JWT");
    res.render('index')
  });

app.listen(3000, function () {
    console.log("Server is running on port 3000");
    console.log("Buka Server di Browser");
  });