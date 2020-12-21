const mysql=require("mysql2");
function creteCon(){
    let connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123123",
        database:"content"
    });
    return connection;
}

module.exports.creteCon=creteCon;