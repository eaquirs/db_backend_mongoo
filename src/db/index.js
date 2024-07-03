import mongoose from 'mongoose'
import { DBName } from '../constant.js'

const conectdb=async ()=>{
    try {
        const muuri="mongodb+srv://safdar:safdar123@cluster0.lxl3fsq.mongodb.net"
        const dbinstanace= await mongoose.connect(`${muuri}/${DBName}`);
        console.log(`\n Sucessfully Connected DB : ${dbinstanace.connection.host}`);

    } catch (error) {
        console.log(`Connection Error Lost: ${error}`);
        process.exit(1);
    }
};
export default conectdb;

