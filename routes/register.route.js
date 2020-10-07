import express from 'express';
import {register} from '../controllers/register.controller.js';
import {regiastrationValidation,loginValidation} from '../validations/register.validation.js'
import registermodel from '../models/register.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const registerRouter=express.Router();



registerRouter.post('/register',async(req,res)=>{
    console.log("in register")
        //Validation
        const {error}= regiastrationValidation(req.body);
        if(error) return res.status(400).json(error.details[0].message);

        //Check email is exists or not?
        const emailexists=await registermodel.findOne({email:req.body.email});
        if(emailexists) return res.status(400).send('Email is already Exists...');
    try{
        await register(req.body)
        return res.status(200).json({message:"Registered"})
    }
    catch(err){
        throw new Error(`${err}`);
    }
});
registerRouter.post('/login',async(req,res)=>{
    //Validate the login data
    const {error}= loginValidation(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    //Check user is exists
    const user=await registermodel.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Email is not found');

    const validpass=await bcrypt.compare(req.body.password,user.password);
    if(!validpass) return res.status(400).send('password is not correct');

    const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).json(token);
});



export default registerRouter;