const mongoose =require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () =>{
    try{
       await mongoose.connect('mongodb+srv://mehravivek2001:nanogames12345@cluster0.gazdk.mongodb.net/user',{
    //      useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false
       });
       console.log("Connection to MongoDB Successful");
    }
    catch(error){
        console.error("Connection to MongoDB Failed", error);
        process.exit(1);

    }
};

module.exports = connectDB;