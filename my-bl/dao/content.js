const create=require("./dbustil");
function indertcontent(title,content,views,tags,ctime,utime,success){
    console.log("fjak;k")
    var connection=create.creteCon();
    var sql="insert into contents (`title`, `content`, `views`, `tags`, `ctime`, `utime`) values (?, ?, ?, ?, ?, ?);"
    var params=[title,content,views,tags,ctime,utime]; 
    connection.connect();
    connection.query(sql,params,(error,result)=>{
      success(result)
      
    })
    connection.end();
}
function queryblog(success){
    var connection=create.creteCon();
    var sql="select id, title, content, views, tags, ctime, utime from contents;"; 
    
connection.query(sql, (error,res)=>{
    console.log(res)
       success(res)
   });
    connection.end();
    
}
function querycontent(contid,success){
    var connection=create.creteCon();
    var sql="select * from contents where id = ?;";
    var params=[contid];
    connection.query(sql,params,function(error,result){
        success(result)

        console.log(result)
        console.log(error)

    })
    connection.end()
}
module.exports.indertcontent=indertcontent;
module.exports.queryblog=queryblog;
module.exports.querycontent=querycontent;