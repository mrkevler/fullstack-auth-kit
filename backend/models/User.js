import mongoose from "mongoose";

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "users";

const schema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true, // username must be unique (selection has to be handled)
      trim: true, // removes the space
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    type: {
      type: mongoose.Schema.Types.String,
      enum: ["github", "email"],
      default: "email",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

export default UserModel;
