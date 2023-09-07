const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected successfully.");
        console.log("Connection Name: ", connection.connection.name);
        console.log("Conneciton Host: ", connection.connection.host);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;