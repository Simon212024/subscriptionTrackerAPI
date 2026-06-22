import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minlength: 8,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        minlength: 8,
        maxlength: 250,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minlength: 8
    }

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;