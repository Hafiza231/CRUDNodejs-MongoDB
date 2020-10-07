import joi from '@hapi/joi';


//validations

export const regiastrationValidation=data=>{
    const schema=joi.object({
        username:joi.string().min(6).required(),
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required()
    });
    return schema.validate(data);    
};
export const loginValidation=data=>{
    const schema=joi.object({
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required()
    });
    return schema.validate(data);
};
