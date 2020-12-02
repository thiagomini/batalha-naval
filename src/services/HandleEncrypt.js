const bcrypt = require('bcryptjs');
const saltRounds = 10;

class HandleEncrypt {
    static generateHash (word) {
        this._validateWord(word);
        return bcrypt.hashSync(word, saltRounds);
    }

    static compareHash ({ word, hash }) {
        this._validateWord(word);
        this._validatehash(hash);
        return bcrypt.compareSync(word, hash);
    }

    static _validateWord (word) {
        if (!word) throw TypeError(`word deve ser uma string válido mas foi recebido como ${word}`);
    }

    static _validatehash (hash) {
        if (!hash) throw TypeError('hash deve ser uma hash válida!');
    }
}

module.exports = HandleEncrypt;