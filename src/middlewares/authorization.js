const asyncHandler = require('express-async-handler');

const configuredAuthorization = asyncHandler(async (req, res, next) => {
  if (parseInt(process.env.REQUIRE_AUTHORIZATION) && !req.url.startsWith('/public') && !req.url.startsWith('/json')) {
    if (req.url.startsWith('/admin')) { if (!req.isSuper) throw ({ failCode: 401, message: 'Você não tem autorização para acessar esse recurso' }); }
  }
  next();
});

module.exports = configuredAuthorization;
