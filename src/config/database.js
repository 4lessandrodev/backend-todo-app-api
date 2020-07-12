const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/todo';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connect', ()=> console.log('Conectado'));