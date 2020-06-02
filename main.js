const express = require("express");
const session = require("express-session");
const mysqlStore = require("express-mysql-session")(session);
const db = require("./lib/db");

const cors = require("cors");

const boardRouter = require("./routes/board");
const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");

const sessionStore = new mysqlStore(db.options);

const app = express();

// mysql.db.connect((err) => {
//   if (err) send(502);
//   console.log("MySQL Connected");
// });

app.use(cors()); // 보안 설정
app.use(express.json()); // body-parser 대체
app.use(
  session({
    secret: "qwrpoqwr@(@qe!3gldnmv$25@%@",
    store: sessionStore,
    resave: false, // ??
    saveUninitialized: true, // 세션이 필요할 때만 작동한다 (리소스 절약)
  })
);

// 라우터
app.use("/board", boardRouter);
app.use("/auth", authRouter);
app.use("/", indexRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.listen(3000, () => {});
