
const process = require('node:process');
const bodyParser = require('body-parser');
var path = require('path');

const express = require('express')
const router = require('express').Router();
const {APP} = require('./config/app.config');
const routes = require('./routes/main.route');
require('./db/mongo.db');

const port = process.env.PORT || APP.PORT



    const app = express();
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use("/", router);
    router.use(APP.PATH, routes);

    app.listen(port);



