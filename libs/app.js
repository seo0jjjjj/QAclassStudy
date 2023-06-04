const express = require('express');
const app = express();

app.get('/',()=>{
    return 'helloWorld'
});
app.get('/api1',(req, res)=>{
    
    return res.json({
        name : 'api1 called!'
    });

});

const server = app.listen('8080',()=>{
    console.log("server Open!!!");
})

module.exports = {app,server};