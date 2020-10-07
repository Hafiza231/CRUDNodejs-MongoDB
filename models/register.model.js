import mongoose from 'mongoose';

const registerSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});
const register=new mongoose.model('registrations',registerSchema);
export default register;