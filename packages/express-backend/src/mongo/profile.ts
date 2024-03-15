import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "ts-models";

const profileSchema = new Schema<Profile>(
  {
    userid: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    nickname: {
        type: String,
        trim: true
    },
    liked_songs: {
        type: [String],
        default: []
    },
    num_liked_songs: {
        type: Number,
        default: 0
    },
    avatar: {
        data: Buffer,
        contentType: String
    },
  },
  { collection: "user_profiles" }
);

const profileModel = model<Profile>("Profile", profileSchema);

export default profileModel;