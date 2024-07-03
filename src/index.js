import { config, configDotenv } from 'dotenv';
configDotenv({path:"./env"})
import conectdb from './db/index.js';


conectdb();


// this is first approach , we can do it , but we have other approach which is modular , that approach is more professional than this approach of connection directly in index
// ;(async()=>{
//     try 
//     {
//         await mongoose.connect(`${process.env.DB_URI}/${DBName}`)
//         app.on("error",(error)=>{
//             console.log("Error Express "+ error);
//         })

//         app.listen(process.env.PORT,()=>{
//            console.log("App is Listning on Port "+process.env.PORT) ;
//         })
//     }
//     catch (error) {
//         console.error("Error : " +error);
//         throw error;
//     }
// })()