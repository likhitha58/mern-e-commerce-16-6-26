require("dotenv").config();

const app=require("./src/app");
const {connectDB}=require("./src/config/db");

const startServer=async()=>{
    try{
        await connectDB();

        app.listen(process.env.PORT,()=>{
            console.log('Server is running on port 3000');
        });
    }catch(error){
        console.log(error);
    }
};
startServer();