const create=require("./dbustil");
function indertEveryDay(content,ctime,success){
    var connection=create.creteCon();
    var sql="insert into every (`content`, `ctime`) values (?, ?);"
    var params=[content,ctime]; 
    connection.connect();
    connection.query(sql,params,(error,result)=>{
        console.log(result)
    })
    connection.end();
}
function queryEveryDay(success){
    var connection=create.creteCon();
    var sql="select * from every order by id desc limit 1;"; 
    
connection.query(sql, (error,res)=>{
       success(res)
   });
    connection.end();
    
}
module.exports.indertEveryDay=indertEveryDay;
module.exports.queryEveryDay=queryEveryDay;