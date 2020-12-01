const bodyParser = require('body-parser');

const configuredBodyParser = bodyParser.urlencoded({
  limit: '50mb',
  extended: true
});

module.exports = configuredBodyParser;
