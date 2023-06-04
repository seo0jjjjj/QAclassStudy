function fetchData(){
    return new Promise((res, rej )=>{
        res('hello')
    });
}

function fetchDataError(){
    return new Promise((res, rej )=>{
        rej('bye');
    });
}

module.exports = {fetchData,fetchDataError}