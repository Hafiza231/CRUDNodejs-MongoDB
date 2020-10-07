import express from 'express';
import
{
    getAllEmployee,
    insertRecord,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
}from '../controllers/employee.controller.js';
import auth from '../TokenVerification/verifyToken.js'
const router=new express.Router();

router.get('/',auth,async(req,res)=>{
    try{
        const employee=await getAllEmployee();
        res.json(employee);
    }
    catch(err){
        res.status(500).send({message:err});
    }
});

router.post('/create',async(req,res)=>{
    try{
        const data=await insertRecord(req.body);
        res.json({data,status:"OK"});
    }
    catch(err){ 
        res.status(500).send({message:`${err}`});
    }
});
router.put('/:id',async(req,res)=>{
    try{
        await updateEmployee(req.params.id,req.body);
        res.status(200).send({message:"updated successfully"});
    }   
    catch(err){
        res.status(500).send({message:`${err}`});
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await deleteEmployee(req.params.id);
        return res.status(200).send({message:"successfully deleted"});
    }
    catch(err){
        return res.status(500).send({message:err});
    }
});
router.get('/:id',async(req,res)=>{
    try{
        const getemployeebyId=await getEmployeeById(req.params.id);
        res.json(getemployeebyId);
    }
    catch(err){
        res.status(500).send({message:err});
    }
});

export default router;