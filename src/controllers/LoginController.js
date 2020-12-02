const { addSeconds } = require("date-fns") ;
const LoginHandler = require('../business/LoginHandler');
const jwt = require("jsonwebtoken");
const MapAuthenticationResponse = require('../dto/mappers/MapAuthenticationResponse');

class LoginController {

    async doAuth ({ email, password }) {
        const loggedUser = await LoginHandler.authenticate({ email, password });

        const token = jwt.sign({ id: loggedUser.id }, process.env.SECRET, {
            expiresIn: Number.parseInt(process.env.EXPIRES_SESSION_TIME)
        });

        return MapAuthenticationResponse.toDto({
            user: loggedUser,
            token,
            expiration_time: addSeconds(new Date(), process.env.EXPIRES_SESSION_TIME)
        })
    }

}


module.exports = LoginController;