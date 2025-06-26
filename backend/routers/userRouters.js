import express from "express";
import User from "../models/User.js";
import GitHubStrategy from "passport-github2";
import passport from "passport";
import {
  createdPassword,
  createToken,
  validatePassword,
} from "../utils/utils.js";

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

// Login and register with email

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await createdPassword(password);

    await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isValid = await validatePassword(password, user.password);

    if (!isValid) {
      throw new Error("Invalid credentials");
    }

    const token = createToken(user);

    res.status(200).json({
      token,
      user: {
        username: user.username,
        type: user.type,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

// GitHub Login

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    const responseData = {
      token: req.user.accessToken,
      user: {
        username: req.user.profile.username,
        type: req.user.type,
      },
    };
    const query = new URLSearchParams(responseData).toString();
    res.redirect(
      `http://localhost:5173/login?data=${JSON.stringify(responseData)}`
    );
  }
);

router.get("/github/logout", (req, res) => {
  req.logout(() => {
    res.json({
      message: "Github user logout successfully!",
    });
  });
});

export default router;
