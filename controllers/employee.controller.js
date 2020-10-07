import employee from '../models/employee.model.js';
import { v4 as uuidv4 } from 'uuid';

export const insertRecord=async(data)=>{
    try{
        data.id=uuidv4();
        await employee.create(data);
    }
    catch(err){
        throw new Error(`create Err: ${err}`)
    }
};

export const getAllEmployee=async()=>{
    try{
       
        const data=await employee.find();
        return  data;
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
        console.log(id)
        return await employee.findOneAndDelete({id:id});
    }
    catch(err){
        throw new Error(`delete employee err ${err}`);
    }
};

export const getEmployeeById=async(id)=>{
    try{
        return await employee.findOne({id:id});
    }
    catch(err){
        throw new Error(`Get employee by id Error ${err}`);
    }
};
