const db = require('./db');

//Criando tbela
const Formdb = db.sequelize.define('usuarios', { 
    nome: {
        type: db.Sequelize.STRING
    },
    data_nascimento: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    }  
    
});

Formdb.sync({force:true});
module.exports = Formdb;

