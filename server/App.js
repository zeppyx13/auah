import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";
import mysql from "mysql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
const saltRounds = process.env.SALT_ROUNDS;
// configure cors
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// mysql
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
// check koneksi
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database", db.config.database);
});
//
// all users
app.get("/api/users", (req, res) => {
  const query = "SELECT * FROM user";
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(result);
  });
});
// user data + hutang
app.get("/api/user/:id", (req, res) => {
  const query =
    "SELECT * FROM user inner join hutang on user.id = hutang.id_user where user.id = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(result);
  });
});
//leaderboard hutang
app.get("/api/LeaderBoard", (req, res) => {
  const query =
    "SELECT user.nama, sum(hutang.hutang) as total_hutang FROM user inner join hutang on user.id = hutang.id_user group by user.id order by total_hutang desc";
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json(result);
  });
});
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server running with ExpressJS");
});
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
