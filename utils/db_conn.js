
import mongoose from 'mongoose';
import config from '../config.js';
export default async()=>{
    try{
        const conn=await mongoose.connect(config.db,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        return (conn);
    }
    catch(err){
        throw new Error(`MongoDB Connection failed ${err}`)
    }
};
