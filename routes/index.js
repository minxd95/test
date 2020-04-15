const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
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

module.exports = router;
