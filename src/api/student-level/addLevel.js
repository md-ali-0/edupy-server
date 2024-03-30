import addStudentTask from "../../lib/student-level/addStudentTask.js";

const addLevel = async(req, res)=>{
    const task = req.body;
    try {
        const result = await addStudentTask(task)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).json(error.message)
    }
}

export default addLevel;