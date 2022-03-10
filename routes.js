const express = require('express')
const routes = express.Router();

const UsuarioController = require('./src/controllers/UsuarioController')

const user = new UsuarioController();

routes.post("/usuarios", user.login)
routes.get("/usuarios/:id", user.obter)


module.exports = routes;