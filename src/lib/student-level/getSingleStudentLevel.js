import StudentLevel from "../../models/StudentLevel.js";

const getSingleStudentLevel = async (userEmail) => {
    try {
        const cursor = await StudentLevel.findOne({studentEmail: userEmail},{_id: 0})
        return cursor
    } catch (error) {
        console.log(error)
        throw error
    }
};

export default getSingleStudentLevel;