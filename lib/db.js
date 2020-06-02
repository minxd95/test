const mysql = require("mysql");

options = {
  host: "nsmserver.cyrhjobbyiec.us-east-2.rds.amazonaws.com",
  //port: 3306,
  user: "admin",
  password: "a1234567890",
  database: "lotto_dev",
};

db = mysql.createConnection(options);

db.options = options;

db.connect();

module.exports = db;
