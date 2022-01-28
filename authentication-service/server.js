const express = require('express');

const port = 3000;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello browser');
});

app.post('/login', (req, res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "bradford1141" && req.body.password == "ymca"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?");
    }
});

app.listen(port, ()=>{});