const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDb', { useNewUrlParser: true });
const db = mongoose.connection;

const AuthRoute = require('./auth')

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Connection Successful')
})

const app = express()

app.use('./api', AuthRoute)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server Established on port ${PORT}`)
})