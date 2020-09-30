import employee from '../models/employee.model.js';

export const insertRecord=async(data)=>{
    try{
        await employee.create(data);
    }
    catch(err){
        throw new Error(`create Err: ${err}`)
    }
};

export const getAllEmployee=async()=>{
    try{
        return await employee.find();
    }
    catch(err){
        throw new Error(`GetAllEmployee err: ${err}`)
    }
};
export const updateEmployee=async(id,data)=>{
    try{
        const empdata={...data};
        return await employee.findOneAndUpdate({id:id},empdata,{new:true});
    }
    catch(err){
        throw new Error(`update employee err:${err}`);
    }
};

export const deleteEmployee=async(id)=>{
    try{
        return await employee.findOneAndDelete({id:id});
    }
    catch(err){
        throw new Error(`delete employee err ${err}`);
    }
}