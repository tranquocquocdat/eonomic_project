const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const {checkOverload} = require('./helpers/check.connect.js');
const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
checkOverload();
app.get("/", function(req, res, next) {
    return res.status(200).json({
        message:"hello",
    })
});

const mongoose= require('./dbs/init.mongodb');

module.exports = app;