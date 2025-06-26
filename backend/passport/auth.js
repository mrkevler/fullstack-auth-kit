import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import { createdPassword } from "../utils/utils.js";
import generator from "generate-password";
import UserModel from "../models/User.js";
dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      // check if user exist (by username)
      const user = await UserModel.findOne({ username: profile.username });
      if (!user) {
        const password = generator.generate({
          length: 10,
          numbers: true,
        });
        await UserModel.create({
          username: profile.username,
          password: await createdPassword(password),
          type: "github",
        });
      }
      console.log(accessToken);
      done(null, {
        profile,
        accessToken,
        type: "github",
      });
    }
  )
);

export default passport;
