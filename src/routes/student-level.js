import { Router } from "express";
import addLevel from "../api/student-level/addLevel.js";
import getAllStudentLevels from "../api/student-level/getAllStudentLevels.js";
import getStudentLevel from "../api/student-level/getStudentLevel.js";

const router = Router()

router.get('/get-student-level/:userEmail', getStudentLevel)
router.post('/add-task', addLevel)
router.get('/get-all-student-levels', getAllStudentLevels)

export default router