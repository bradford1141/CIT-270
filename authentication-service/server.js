const express = require('express');

const port = 3000;

const fs = require('fs')

const bodyParser = require('body-parser');

const md5 = require('md5');

const https = require('https');

const app = express();

let invalidLoginAttempts=0;

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello browser');
});

app.post('/login', (req, res) => {
    let passHash = md5(req.body.password);
    if(req.body.userName == "bradford1141" && passHash == "94e7757c35f73c811c4487d8e320cff6"){
        res.send("Welcome!")
    } else{
        invalidLoginAttempts++;
        console.log(invalidLoginAttempts+"invalid attempt")
        res.status(401);
        res.send("Who are you?");
    }
});

https.createServer({
    key: fs.readFileSync('PRIVATEKEY.key'),
    cert: fs.readFileSync('server.cert'),
    passphrase: "P@ssw0rd"
}, app).listen(3000, () => {
    console.log('Listening...')
})