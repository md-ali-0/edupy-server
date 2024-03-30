import StudentLevel from "../../models/StudentLevel.js";

const addStudentTask = async(task)=>{
    const userEmail = task?.studentEmail

    try{
        let day = 7
        const taskKeys = Object.keys(task)
        if (!taskKeys) {
            throw new Error('Body Data not Found')
        }
        const { updatedAt: lastReqUpdateDate } = task[taskKeys[0]]

        const findTask = await StudentLevel.findOne({studentEmail: userEmail})
        
        if (!findTask) {
            const NewTask = new StudentLevel(task)
            const cursor = await NewTask.save()
            return cursor
        }
        if (findTask[taskKeys[0]]) {
            const lastUpdatedDate = await findTask[taskKeys[0]].updatedDate
            const milliSeconds = new Date(lastReqUpdateDate) - new Date(lastUpdatedDate)
            day = Math.floor(milliSeconds / (1000 * 60 * 60 * 24))
            
        }
        if (day>=7) {
            const updateDoc = await StudentLevel.findByIdAndUpdate(findTask._id, task)
            return updateDoc
        } else {
            throw new Error('You can not update before 7 days')
        }
    } catch(err){
        throw err
    }
}

export default addStudentTask