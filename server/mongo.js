const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    conformpassword:{
        type:String,
        required:false
    }
    
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection