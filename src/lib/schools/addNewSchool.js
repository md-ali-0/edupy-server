import School from "../../models/school.js";


const addNewSchool = async(school)=>{
    const NewSchool = new School(school)
    try{
        const cursor = await NewSchool.save()
        return cursor
    } catch(err){
        throw err
    }
}

export default addNewSchool