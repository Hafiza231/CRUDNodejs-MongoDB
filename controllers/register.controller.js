import registermodel from '../models/register.model.js';
import bcrypt from 'bcryptjs';

export const register=async(data)=>{
      //Encrypt the password
      const salt=await bcrypt.genSalt(10);
      const hashedpassword=await bcrypt.hash(data.password,salt)

    try{
        const registeruser=new registermodel({
            username:data.username,
            email:data.email,
            password:hashedpassword
        });
        await registeruser.save();   
    }
    catch(err){
        throw new Error(`${err}`);
    }
}
