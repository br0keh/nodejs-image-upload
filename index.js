const express = require('express');
const morgan = require('morgan');

var cors = require('cors');

const app = express()

app.use(cors());
app.use(morgan('dev'))
app.use(require('./routes'))

app.listen(8080)
