const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authControllers = require('./controllers/auth');
const rechargeControllers = require('./controllers/recharge');

const app = express();

app.set('jwtSecret', 'clave secreta, no hackear');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', authControllers);
app.use('/api', rechargeControllers);

module.exports = app;
