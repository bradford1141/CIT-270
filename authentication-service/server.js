const express = require('express');

const port = 3000;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello browser');
});

var md5 = require('md5');
console.log(md5('message'));

app.post('/login', (req, res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "bradford1141" && req.body.password == "46de89b0e37534254f58ef29a6719939"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?");
    }
});

app.listen(port, ()=>{});