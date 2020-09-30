import app from './app.js';
import DB from './utils/db_conn.js';


const serverstart=async()=>{
    await DB();
    const port=1210;

    app.listen(port,()=>{
        console.log(`Server started on : ${port}`)
    });
};
(async()=>{
    await serverstart();
})();