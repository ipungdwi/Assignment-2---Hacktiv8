const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");

const secretKey = "123";

const dataUser = JSON.parse(fs.readFileSync("./data/users.json"));
const dataTeachers = JSON.parse(fs.readFileSync("./data/teachers.json"));

// jwt.sign(
//     {
//         dataUser: dataUser,
//         dataTeachers : dataTeachers
//     },
//     "secret",
//     (err, token) => {
//         console.log(token);
//     }
// )

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = dataUser.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });
    res.render("dashboard", { token: token });
  } else {
    res.status(401).json({ message: "Gagal autentikasi" });
  }
});

function verifikasi(req, res, next) {
  const getHeader = req.headers["auth"];
  if (typeof getHeader !== "undefined") {
    req.token = getHeader;
    next();
  } else {
    res.sendStatus(403);
  }
}

router.get("/data", verifikasi, (req, res) => {
  jwt.verify(req.token, secretKey, (err, dataAuth) => {
    if (err) {
      res.sendStatus(403);
    } else {
        res.json(dataUser);
    }
  });
});

router.get("/teachers", verifikasi, (req, res) => {
  jwt.verify(req.token, secretKey, (err, dataAuth) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json(dataTeachers);
    }
  });
});

module.exports = router;
