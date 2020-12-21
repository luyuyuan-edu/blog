const expres=require("express");
const contentdao=require("../dao/content")

const utime=require("../init/time");

const route=expres.Router();

route.get("/",(req,res)=>{
  var parms=req.query;
  let blogt=parms.title;
  let blogc=parms.content;
  let blogs=parms.tages;
  console.log(utime.getnow())
  console.log(parms)
contentdao.indertcontent(blogt,blogc,0,blogs,utime.getnow(),utime.getnow(),(error,suslt)=>{
 
}) 
  res.send("chenggong")

});
// 拉取博客的内容
route.get("/blog",(req,res)=>{
 
 contentdao.queryblog((resl)=>{
    res.send(JSON.stringify(resl))
  console.log(resl)

  })

  
 
})
route.get("/contents",(req,res)=>{
  var parms=req.query.id;
  contentdao.querycontent(parms,(resl)=>{
    res.send(JSON.stringify(resl))

  })
  console.log(parms);
  
 
   
  
 })
module.exports=route;