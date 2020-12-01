const jwt = require('jsonwebtoken');

const configuredAuthenticated = (req, res, next) => {
  if (!parseInt(process.env.SHOULD_LOGIN)) {
    req.user = 2;
  } else {
    if (!req.url.startsWith('/public') && !req.url.startsWith('/json')) {
      const accessToken = req.headers.Authorization || req.headers.authorization;
      if (!accessToken) {
        throw ({ failCode: 401, message: 'Token não informado' });
      } else {
        jwt.verify(accessToken, process.env.SECRET, (err, decoded) => {
          if (err) {
            let message = 'Erro inesperado na autenticação';
            switch (err.name) {
              case 'TokenExpiredError':
                message = 'Token expirado';
                break;
              case 'JsonWebTokenError':
                message = 'Token inválido';
                break;
            }
            throw ({ failCode: 401, message });
          } else {
            req.user = decoded.id || decoded.sub;
            req.isSuper = decoded.isSuper;
          }
        });
      }
    }
  }

  next();
};

module.exports = configuredAuthenticated;
