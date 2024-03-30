import getAllSchools from "../../lib/schools/getAllSchools.js"

const getSchools = async (req, res)=>{

    try {
        const result = await getAllSchools()
        res.send(result)
    } catch (error) {
        return res.status(error?.status || 500).send(error.message)
    }
} 

export default getSchools