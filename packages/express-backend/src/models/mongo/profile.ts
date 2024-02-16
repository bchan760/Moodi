import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../profile";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    liked_songs: { type: [String], required: true, default: [] },
    num_liked_songs: { type: Number, required: true, default: 0 },
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;