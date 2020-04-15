const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const db = require("./lib/db");

const boardRouter = require("./routes/board");
const loginRouter = require("./routes/login");
const indexRouter = require("./routes/index");

db.connect();

const app = express();

app.use(
  session({
    secret: "qwrpoqwr@(@qe!3gldnmv$25@%@",
    resave: false, // ??
    saveUninitialized: true, // 세션이 필요할 때만 작동한다 (리소스 절약)
  })
);

// 라우터
app.use("/board", boardRouter);

app.use(cors()); // 보안 설정
app.use(express.json()); // body-parser 대체

// app.use((req, res, next) => {
//   if (req.headers.token != "sexsex") res.sendStatus(401);
//   next(); // 왜 이걸 빼면 로컬에서만 작동할까??
// });

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.listen(3000, () => {});
