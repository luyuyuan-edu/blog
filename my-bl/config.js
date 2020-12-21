const fs=require("fs");
let globalconfig={};
const conf=fs.readFileSync("./server.conf");
let confarr=conf.toString().split("\n");
for (let i = 0; i < confarr.length; i++) {

    globalconfig[confarr[i].split("=")[0].trim()]=confarr[i].split("=")[1].trim()
}

module.exports=globalconfig