
const handleBeforeResponse = async function (err, req, res, next) {
  const scope = {
    message: 'Ocorreu um erro inesperado, por favor nos envie o seu uuid'
  };

  err.failCode ? res.status(err.failCode) : res.status(500);
  err.error_code ? scope.error_code = err.error_code : null;
  err.response ? scope.response = err.response : null;

  if (res.statusCode == 500) {
    console.warn(err.message);
    console.warn(err.stack);

  } else {
    scope.message = err.message;
  }

  res.json(scope);
};

// TALVEZ ADICIONAR UM CHAIN PARA AVALIAR O QUE FAZER COM CADA STATUS DE ERRO
module.exports = handleBeforeResponse;
