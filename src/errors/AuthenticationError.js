class AuthenticationError extends Error {
    constructor() {
        super('Usuário ou senha incorretos');
        this.failCode = 401;
    }

}


module.epxorts = AuthenticationError;