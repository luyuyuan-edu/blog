function genow(){
    let date=new Date()
    return date.getUTCFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日"+date.getHours()+"时"
}
module.exports.getnow=genow;