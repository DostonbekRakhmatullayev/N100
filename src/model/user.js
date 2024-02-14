import mongoose from "mongoose";

const user = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
  },
  {
    collection: true,
  }
);
const UserModel = mongoose.model("users", user);

export { UserModel };
