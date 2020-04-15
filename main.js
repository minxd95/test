const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "test",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});

app.use(cors()); // 보안 설정
app.use(express.json()); // body-parser 대체

app.use((req, res, next) => {
  if (req.headers.token != "sexsex") res.sendStatus(401);
  next(); // 왜 이걸 빼면 로컬에서만 작동할까??
});

app.get("/", (req, res, next) => {
  res.send(`
    GET<br>
    목록 받아오기 : /board<br>
    페이지 상세보기 : /board/:id<br>
    title, content, author<br><br>
    POST<br>
    글쓰기 : /board<br>
    title, content, author
    `);
});
app.post("/board", (req, res, next) => {
  const post = req.body;
  db.query(
    `INSERT INTO test(title,content,author) values(?,?,?)`,
    [post.title, post.content, post.author],
    (err) => {
      if (err) next(err);
      res.sendStatus(204);
    }
  );
});
app.get("/board", (req, res, next) => {
  db.query(`SELECT * FROM test`, (err, results) => {
    if (err) next(err);
    if (results.length == 0) {
      res.status(200).json([]);
    } else res.json(results);
  });
});
app.get("/board/:id", (req, res, next) => {
  db.query(`SELECT * FROM test WHERE id=?`, id, (err, result) => {
    if (err) next(err);
    res.json({
      id: result[0].id,
      title: result[0].title,
      content: result[0].content,
      author: result[0].author,
    });
  });
});
app.use((req, res, next) => {
  res.sendStatus(404);
});
app.listen(3000, () => {});
