import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },  
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    profilePicture: { type: String, default:"" },
    bannerImage: { type: String, default:"" },
    bio: { type: String, default:"", maxlength: 160 },
    location: { type: String, default:"" },
    website: { type: String, default:"" },  
    followers: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] },
    following: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
