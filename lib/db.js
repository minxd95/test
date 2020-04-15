const mysql = require("mysql");

// Database 선언
const db = {
  connect: function () {
    const db = mysql.createConnection({
      host: "nsmserver.cyrhjobbyiec.us-east-2.rds.amazonaws.com",
      user: "admin",
      password: "a1234567890",
      database: "lotto_dev",
    });
    db.connect(function (err) {
      if (err) throw err;
      console.log("MySQL Connected!");
    });
  },
};

module.exports = db;
