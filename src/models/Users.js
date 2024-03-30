import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        'name' : {type: String, required: true},
        'username' : {type: String, required: true, unique: true},
        'email' : {type: String, required: true, unique: true},
        'password' : { type: String, required: true},
        'phone' : {type: String},
        'image' : {type: String, required: true,
            default: 'https://i.ibb.co/0XQDTZ1/user.png'
        },
        'cover' : {type: String, required: true,
            default: 'https://i.ibb.co/SBJcwSg/cover.png'
        },
        'school' : {type: String},
        'address' : {type: String},
        'city' : {type: String},
        'country' : {type: String},
        'bio' : {type: String},
        'status': {type: Boolean, default: true},
        'role': {type: String, required: true, enum: ['admin', 'student'], default: 'student'},
        'lastSignInAt': { type: Date, default: new Date()},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const User = model('users', UserSchema)

export default User