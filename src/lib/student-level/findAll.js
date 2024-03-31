import StudentLevel from "../../models/StudentLevel.js";

const findAll = async () => {
    try {
        const cursor = await StudentLevel.find()
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default findAll;