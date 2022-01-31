const express = require('express');

const port = 3000;

const bodyParser = require('body-parser');

const md5 = require('md5');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello browser');
});

app.post('/login', (req, res) => {
    let passHash = md5(req.body.password);
    if(req.body.userName == "bradford1141" && passHash == "46de89b0e37534254f58ef29a6719939"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?");
    }
});

app.listen(port, ()=>{});