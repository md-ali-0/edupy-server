import { Schema, model } from "mongoose";

const SchoolSchema = new Schema(
    {
        'name' : {type: String, required: true},
        'location' : {type: String, required: true, unique: true},
        'createdAt': { type: Date, default: new Date()},
    },
    { versionKey: false }
)

const School = model('schools', SchoolSchema)

export default School