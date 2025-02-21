import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";

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

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server running with ExpressJS");
});
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
