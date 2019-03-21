const express = require('express');
const bodyParser = require('body-parser');
const path    = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/client/index.html'));
})
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})