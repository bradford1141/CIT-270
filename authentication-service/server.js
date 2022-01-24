const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello browser');
});

app.post('/login', (req, res) =>{

});

app.listen(port, ()=>{});