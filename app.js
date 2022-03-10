const app = require('./src/config/server')
const porta = process.env.porta

app.listen(porta, () => console.log("Api rodando " + porta))