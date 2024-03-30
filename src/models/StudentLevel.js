import { Schema, model } from "mongoose";

const ValueWithDateSchema = new Schema({
    value: { type: String, default: "" },
    updatedDate: { type: Date, default: Date.now }
}, { _id: false });

const ExtraActivitySchema = new Schema({
    bookRead: {type: Boolean, default: false},
    religiousActivity: {type: Boolean, default: false},
    personalDevelopment: {type: Boolean, default: false},
    updatedDate: { type: Date, default: Date.now }
}, {_id: false});

const StudentLevelSchema = new Schema({
    studyRoutine: ValueWithDateSchema,
    humanityLevel: ValueWithDateSchema,
    liesCount: ValueWithDateSchema,
    ordersFollowed: ValueWithDateSchema,
    treePlantation: ValueWithDateSchema,
    extraActivity: ExtraActivitySchema,
    studentEmail: { type: String, unique: true, default: "" },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});

const StudentLevel = model("StudentLevel", StudentLevelSchema);

export default StudentLevel;
