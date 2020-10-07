import Express from 'express';
import emprouter from './routes/employee.route.js';
import registerRouter from './routes/register.route.js';

const app=new Express();
app.use(Express.urlencoded({extended:true}));
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Pass to next layer of middleware
    return next();
  });
app.use('/employees',emprouter);
app.use('/user',registerRouter);

export default app;
