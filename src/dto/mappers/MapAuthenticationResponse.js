const LoginReadDto = require('../read/AuthenticationReadDto');

class MapAuthenticationResponse {
    static toDto(authenticationResponse) {
        if (!authenticationResponse) throw TypeError('loggedUser deve ser uma instância');
        return new LoginReadDto({
            id: authenticationResponse.user.id,
            email: authenticationResponse.user.email,
            token: authenticationResponse.token,
            expirationTime: authenticationResponse.expirationTime
        });
    }
}

module.exports = MapAuthenticationResponse;