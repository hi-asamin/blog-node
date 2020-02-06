const express = require('express');
const app = express();

const appConf = require('./config/app_conf.json');

const articleRouter = require('./routes/article');

app.use(appConf.uri.article, articleRouter);

module.exports = app;
