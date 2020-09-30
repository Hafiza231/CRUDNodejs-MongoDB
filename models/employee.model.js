import mongoose from 'mongoose';

const employeeSchema=new mongoose.Schema({
    id:String,
    firstName:String,
    lastName:String,
    salary:Number,
    designation:String
});

const employee=new mongoose.model('employees',employeeSchema);

export default employee;