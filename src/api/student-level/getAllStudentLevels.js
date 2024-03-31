import findAll from "../../lib/student-level/findAll.js"

const getAllStudentLevels = async (req, res)=>{

    try {
        const result = await findAll()
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
} 

export default getAllStudentLevels