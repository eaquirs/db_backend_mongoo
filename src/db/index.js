import mongoose from 'mongoose'
import { DBName } from '../constant.js'

const conectdb=async ()=>{
    try {
        const dbinstanace= await mongoose.connect(`mongodb+srv://safdar:safdar123@cluster0.remanin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/${DBName}`);
        console.log(`\n Sucessfully Connected DB : ${dbinstanace.connection.host}`);

    } catch (error) {
        console.log(`Connection Error : ${error}`);
        process.exit(1);
    }
};
export default conectdb;

