let ambiente = undefined;

function configurarLOCAL(){
    return {
        dialect: process.env.HTML_DIALECT,
        host: process.env.HML_HOST,
        user: process.env.HML_USER_NAME,
        password: process.env.HML_PASSWORD,
        database: process.env.HML_DATABASE,
        porta: process.env.HML_PORTA,
        define: {
            timestamps: true,
            underscored: true,
        }
    }
    
}

module.exports = ambiente;