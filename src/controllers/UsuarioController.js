class UsuarioController{
    login(req, res) {
        return res.json({ mensagem: "usuário ou senha inválidos!"})
    }
    obter(req, res){
        return res.json([{id:1, nome: 'mary angelica'}])
    }
}


module.exports = UsuarioController