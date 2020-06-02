const express = require("express");
const db = require("../lib/db");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  db.query(
    "INSERT INTO t_user(username,password,nickname,email,profileimg,signupAt) values(?,?,?,?,?,NOW())",
    [
      req.body.username,
      req.body.password,
      req.body.nickname,
      req.body.email,
      req.body.profileimg,
    ],
    (err) => {
      if (err) res.send(502);
      res.send(200);
    }
  );
});

router.post("/", (req, res, next) => {
  db.query(
    "SELECT * FROM t_user WHERE username=? AND password=?",
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        res.send(401);
      }
      req.session.username = req.body.username;
      req.session.nickname = result[0].nickname;
      req.session.profileimg = result[0].profileimg;
      req.session.save((err) => {
        if (err) res.send(500);
        res.send(200);
      });
    }
  );
});

router.post("/logout", (req, res, next) => {
  req.session.destory();
});

module.exports = router;
