import express from 'express';
import
{
    getAllEmployee,
    insertRecord,
    updateEmployee,
    deleteEmployee
}from '../controllers/employee.controller.js';

const router=new express.Router();

router.get('/',async(req,res)=>{
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
        await insertRecord(req.body);
        res.json({status:"OK"});
    }
    catch(err){ 
        res.status(500).send({message:err});
    }
});
router.put('/:id',async(req,res)=>{
    try{
        await updateEmployee(req.params.id,req.body);
        const empdata=await getAllEmployee();
        res.status(500).json(empdata);

    }   
    catch(err){
        res.status(500).send({message:err});
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        await deleteEmployee(req.params.id);
        return res.status(200).send({message:"successfully deleted"});
    }
    catch(err){
        return res.status(500).send({message:err});
    }
});

export default router;