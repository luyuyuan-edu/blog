const expres=require("express");

const everydao=require("../dao/everydao");
const utime=require("../init/time");

const route=expres.Router();
// 每日一句

route.get("/",(req,res)=>{
  var parms=req.query;
  let parm=Object.keys(parms).toString();
  console.log(Object.keys(parms).toString());
 
  everydao.indertEveryDay(parm,utime.getnow(),(error,result)=>{
    if (error) {
     
    }else{
      
    }
    response.writeHead(200);
    response.end(JSON.stringify(result))
    
  });
  res.send("chenggong")

})
// 每日一句的拉起返回结果
route.get("/every",(req,res)=>{
 
 everydao.queryEveryDay((resl)=>{
    res.send(JSON.stringify(resl))
  

  })

  
 
})
module.exports=route;