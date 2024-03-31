import { Router } from "express";
import authVerify from "../api/auth/authVerify.js";
import allUsers from "../api/users/allUsers.js";
import checkUserRole from "../api/users/checkUserRole.js";
import deleteUser from "../api/users/deleteUser.js";
import editUser from "../api/users/editUser.js";
import singleUser from "../api/users/singleUser.js";
import updatePass from "../api/users/updatePass.js";
import userSignIn from "../api/users/userSignIn.js";
import userSignUp from "../api/users/userSignUp.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router()

router.post('/login', userSignIn)
router.post('/register', userSignUp)
router.delete('/delete-user/:id', verifyToken, verifyAdmin, deleteUser)
router.get('/check-user-role/:email', checkUserRole)
router.post('/token-verify', authVerify)
router.get('/users', allUsers)
router.post('/user/:id', singleUser)
router.put('/edit-user/:id', editUser)
router.put('/update-pass/:id', updatePass)

export default router