"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
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
}, { collection: "user_profiles" });
const profileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = profileModel;
