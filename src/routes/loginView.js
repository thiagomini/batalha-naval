const Router = require('express');
const loginView = Router();
const asyncHandler = require('express-async-handler')
const controller = new (require('../controllers/LoginController'))();

const login = asyncHandler(async (req, res) => {
    const response = await controller.doAuth({
        email: req.body.email,
        password: req.body.password
    })

    return { response, message: 'Login realizado com sucesso!' };
});

loginView.post("/public/auth/login", login);

module.exports = loginView