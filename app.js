'use strict'
require('./src/lib/dotenv');
const express = require('express');
const path = require('path');
const middleWares = require('./src/middlewares');
const routes = require('./src/routes');




const app = express();
app.set('etag', false);

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


async function loadRoutes () {
  await routes.start();
  routes.routes.forEach((route) => {
    app.use(route);
  });
}

function loadMiddlewares () {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  middleWares.default.forEach((middleware) => {
    app.use(middleware);
  });
}

function loadErrorMiddleware () {
  app.use(middleWares.error);
}

async function initApp () {
  loadMiddlewares(); // Importante carregar Middleware antes das rotas!!!
  await loadRoutes();
  loadErrorMiddleware(); // Importante carregar o middleware de erros depois das rotas!!
}

initApp();



module.exports = app;
