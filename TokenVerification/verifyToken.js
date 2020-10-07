import jwt from 'jsonwebtoken';

 function auth(req,res,next){
    try{
        const token=req.headers.authorization;
        const verified= jwt.verify(token,process.env.TOKEN_SECRET);
        req.user=verified;
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }

}
export default auth;