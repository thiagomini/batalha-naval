const handlerEncrypt = require("../services/HandleEncrypt");
const { users } = require('../models');
const { NotFoundError, AuthenticationError } = require('../errors');

class LoginHandler {
    static async authenticate ({ email, password }) {
        const user = await users.findOne({
            where: { email }
        });

        if (!user) throw NotFoundError('usuário');

        if (!handlerEncrypt.compareHash({ hash: user.get('password'), word: password })) {
            throw new AuthenticationError;
        }

        return user;
    }
}

module.exports = LoginHandler;