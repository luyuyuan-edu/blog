const create=require("./dbustil");

function querysearch(success){
    var connection=create.creteCon();
    var sql="select id, title, content, views, tags, ctime, utime from contents;"; 
    
connection.query(sql, (error,res)=>{
       success(res)
   });
   
    
    connection.end()
}
module.exports.querysearch=querysearch;