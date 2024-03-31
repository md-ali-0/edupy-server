import findAllUsers from "../../lib/user/findAllUsers.js";

const allUsers = async (req, res)=>{
    let query = {
        role: 'student'
    }
    try {
        const result = await findAllUsers(query)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
}

export default allUsers