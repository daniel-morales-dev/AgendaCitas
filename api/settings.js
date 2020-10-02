const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

function config(app) {
    app.disable('x-powered-by');
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(cors());
    app.use(cors({
        origin: 'http://localhost:3000'
    }));
}

module.exports = config;