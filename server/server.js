const express=require("express");
const dotenv=require("dotenv").config();
const route=require("./Routes/user-route.js");
const connectDB=require("./Config/db-connection.js");
const {errorHandler}=require("./Middleware/error-handler.js");

connectDB();

const port=process.env.PORT || 3001;

const app=express();

app.use(express.json());

app.use('/', route);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
});