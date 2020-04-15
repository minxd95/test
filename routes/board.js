const express = require("express");

const router = express.Router();

/*
router.post("/", (req, res, next) => {
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
router.get("/", (req, res, next) => {
  db.query(`SELECT * FROM test`, (err, results) => {
    if (err) next(err);
    if (results.length == 0) {
      res.status(200).json([]);
    } else res.json(results);
  });
});
router.get("/:id", (req, res, next) => {
  db.query(`SELECT * FROM test WHERE id=?`, req.params.id, (err, result) => {
    if (err) next(err);
    res.json({
      id: result[0].id,
      title: result[0].title,
      content: result[0].content,
      author: result[0].author,
    });
  });
});
*/

module.exports = router;
