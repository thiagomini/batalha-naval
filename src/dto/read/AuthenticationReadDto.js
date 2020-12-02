const AbstractReadDto = require('./AbstractReadDto');

class AuthenticationReadDto extends AbstractReadDto {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get token() {
        return this._token;
    }

    set token(value) {
        this._token = value;
    }

    get expirationTime() {
        return this._expirationTime;
    }

    set expirationTime(value) {
        this._expirationTime = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }
    constructor({ snakeCase, id, email, token, expirationTime, user }) {
        super({ snakeCase })
        this._id = id;
        this._email = email;
        this._token = token;
        this._expirationTime = expirationTime;
        this._user = user;
    }
}

module.exports = AuthenticationReadDto;