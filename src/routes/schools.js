import { Router } from "express";
import addSchool from "../api/school/addSchool.js";
import getSchools from "../api/school/getSchools.js";

const router = Router()

router.get('/all-schools', getSchools)
router.post('/add-school', addSchool)

export default router