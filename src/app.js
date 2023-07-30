const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
app.use(morgan("dev"));
// app.use(morgan("compile"));
// app.use(morgan('common'));
app.use(helmet());
app.use(compression());
app.get("/doc", function(req, res, next) {
    const compress = "hell dattran"
    return res.status(200).json({
        message:"hello",
        metadata: compress.repeat(1000000)
    })
});

const mongoose= require('./dbs/init.mongodb');

module.exports = app;