import { Router } from "express";
import getSchools from "../api/school/getSchools.js";

const router = Router()

router.get('/all-schools', getSchools)

export default router