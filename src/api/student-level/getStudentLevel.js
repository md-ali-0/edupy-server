import getSingleStudentLevel from "../../lib/student-level/getSingleStudentLevel.js"

const getStudentLevel = async (req, res)=>{
    const userEmail = req.params.userEmail
    try {
        const result = await getSingleStudentLevel(userEmail)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
} 

export default getStudentLevel