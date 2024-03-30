import { Router } from "express";
import addLevel from "../api/student-level/addLevel.js";
import getStudentLevel from "../api/student-level/getStudentLevel.js";

const router = Router()

router.get('/get-student-level/:userEmail', getStudentLevel)
router.post('/add-task', addLevel)

export default router