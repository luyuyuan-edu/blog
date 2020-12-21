
const express=require("express");
const globalconfig = require("./config");
const loader=require("./loader")
const everyday=require("./web/everydayconter")
const mysql=require("mysql2");
const app= express();
// const ever=require("./web/everydayconter");
app.use(express.static("./page/"));
app.use("/news",require("./web/everydayconter"))
app.use("/bloglist",require("./web/cntent"))
app.use("/seachlist",require("./web/seach"))
app.listen(globalconfig.port,function(){

    
})
