import School from "../../models/school.js";

const getAllSchools = async () => {
    try {
        const cursor = await School.find()
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default getAllSchools;