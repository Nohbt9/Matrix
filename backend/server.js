const express=require("express");
require("./database");
// require("./database_func/PinInsert.js");
// require("./database_func/siteinsert.js");
const User=require("./Models/user");
const Site=require("./Models/web_url");
const cors=require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// name: String,
//     password:String,
//     pincode:Number,
app.post("/createUser",async (req,res)=>{
  const result=  await User.find({name:req.body.username});
  if(result.length==0){
    const obj =await User.create({name:req.body.username,password:req.body.password,pincode:req.body.pincode});
    console.log(obj);
    if(obj){
    res.send({code:1,username:req.body.username});
    }else{
        res.send({code:0}); 
    }
  }else{
    res.send({code:0});
  }

});
app.post("/findUser",async (req,res)=>{
    const result=  await User.find({name:req.body.username});
    console.log(result);
    if(result.length==0){
        res.send({code:0});
    }else{
        if(result[0].password==req.body.password){
            res.send({code:1,username:result[0].name});
          }else{
            res.send({code:0});
          }
     
    }
  
  });

  app.post("/getNewsonpin",async (req,res)=>{
    const list = await Site.find({pincode:req.body.pincode});
res.send({code:1,news:list});
  });
app.post("/getNews", async (req,res)=>{
    const result=  await User.find({name:req.body.username});
    if(result.length==0){
       res.send({code:0});
    }
const list = await Site.find({pincode:result[0].pincode});
res.send({code:1,news:list});
});
app.listen(800,()=>{
    console.log("The server started at port 800");
});



