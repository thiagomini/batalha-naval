class NotFoundError extends Error {
    constructor (resource) {
        super(`Erro: recurso '${resource}' não encontrado!`);
        this.failCode = 404;
    }
}


module.epxorts = NotFoundError;