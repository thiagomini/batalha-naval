const os = require('os');
const formData = require('express-form-data');

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

const configuredFormData = formData.parse(options);

module.exports = configuredFormData;
