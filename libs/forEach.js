
function Excute(){
    this.name = "hi"
}

Excute.prototype.get = function(){
    return 'get'
}

function Excute2(){
    const excuter = new Excute();
    const result = excuter.get();
    return result;
}

  module.exports = {Excute, Excute2}