import addNewSchool from "../../lib/schools/addNewSchool.js";

const addSchool = async(req, res)=>{
    const school = req.body;
    try {
        const result = await addNewSchool(school)
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).json(error.message)
    }
}

export default addSchool;