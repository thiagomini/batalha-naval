const cors = require('cors');

const configuredCors = cors({ exposedHeaders: ['Numberproposals'] });

module.exports = configuredCors;
