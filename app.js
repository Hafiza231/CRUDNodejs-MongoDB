import Express from 'express';
import emprouter from './routes/employee.route.js';
import path from 'path';
import exphbs from 'express-handlebars';
import bodyparser from 'body-parser';
const __dirname = path.resolve();
const app=new Express();



app.use(Express.json());
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

//   app.use(bodyparser.urlencoded({
//     extended: true
//   }));
// app.use(bodyparser.json());
// app.set('views', path.join(__dirname, '/views/'));
// app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
// app.set('view engine', 'hbs');
app.use('/employees',emprouter);

export default app;