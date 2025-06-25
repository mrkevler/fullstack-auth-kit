import express from "express";
import User from "../models/User.js";
import {
  createdPassword,
  createToken,
  validatePassword,
} from "../utils/utils.js";

const router = express.Router();

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
      },
    });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
});

export default router;
