'use strict';

const middlewares = {};
middlewares.default = [];

const handleErrorResponse = require('./errorHandler');
const authenticate = require('./authenticate');
const authorization = require('./authorization');
const cors = require('./cors');
const bodyParser = require('./bodyParser');
const formData = require('./formData');

middlewares.default.push(cors);
middlewares.default.push(authenticate);

middlewares.default.push(bodyParser);
middlewares.default.push(formData);
middlewares.default.push(authorization);

middlewares.error = handleErrorResponse;

module.exports = middlewares;
