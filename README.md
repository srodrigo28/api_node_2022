# Api Node com Relacionamento
* https://www.udemy.com/course/aprenda-a-criar-uma-apirest-com-nodejs/learn/lecture/29696518#overview
* Atual video :: https://www.udemy.com/course/aprenda-a-criar-uma-apirest-com-nodejs/learn/lecture/29696580#overview

### Front-End em Vue
    * encurtador.com.br/dvyGX

### Criação do projeto
    * abrir uma pasta com vscode
    * npm init -y
    * npm i nodemon express cors dotenv
    * npm i pg pg-hstore
    * npm i sequelize sequelize-cli

### Criar estrutura de pastas
    * na rais
        * app.js
        * routes.js
        * .env
    * no src
        * config, controllers, database, dtos, models, services, utils
### package.json
    "scripts": {
    "start": "nodemon app.js",
    "criar-banco": "yarn sequelize db:create",
    "criar-migration": "yarn sequelize migration:create --name=criar-tabela-xyz",
    "executar-migration": "yarn sequelize db:migrate",
    "desfazer-migration": "yarn sequelize db:migrate:undo"
},