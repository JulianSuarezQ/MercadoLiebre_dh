const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require("path");


app.listen(process.env.PORT, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});