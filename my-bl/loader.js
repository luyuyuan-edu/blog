const fs=require("fs");
const glorblay=require("./config");
const files=fs.readdirSync(glorblay["web_path"]);
let congiarr=[];
const temp="./"+glorblay["web_path"]+"/"+files;
congiarr.push(temp);


// for (let i = 0; i < files.length; i ++) {
//     let temp=require("./"+glorblay["web_path"]+"/"+files[i]);
   
//    console.log(temp);
//     if(temp.path){
//         for (let [key, value] of temp.path) {
//             if (pathMap.get(key)==null) {
//                 pathMap.set(key,value);
//             }else{
//                 throw new Error("url path异常 ")
//             }
            
//         }
//         congiarr.push(temp);
//     }
    
// }
module.exports=congiarr;