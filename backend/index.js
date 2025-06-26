import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import uri from "./db/db.js";
import passport from "./passport/auth.js";
import userRouters from "./routers/userRouters.js";
import contentRouters from "./routers/contentRouters.js";
import session from "express-session";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", userRouters);
app.use("/content", contentRouters);

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});
