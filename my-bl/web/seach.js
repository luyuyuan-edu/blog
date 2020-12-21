const expres=require("express");
const searchdao=require("../dao/searchdao")

const utime=require("../init/time");
const { indexOf } = require("../loader");

const route=expres.Router();

route.get("/",(req,res)=>{
 console.log(req.query)
 
  searchdao.querysearch((resl)=>{
    let seclist=[];
    for (let i = 0; i < resl.length; i++) {
      let padan=resl[i].title.indexOf(req.query.t)
       if (padan==0) {
        seclist.push(resl[i])
       }
    }
   
    res.send(seclist)
        
  })
 
   
  
 }) 
 module.exports=route;

