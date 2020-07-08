const db = require('./db');

//Criando tbela
const Formdb = db.sequelize.define('nometabela', { 
    nome :{
        type: db.Sequilize.STRING
    },
    Data: {
        type: db.Sequilize.STRING
    },
    email :{
        type: db.Sequilize.STRING
    },
    telefone :{
        type: db.Sequilize.STRING
    }  
});

Formdb.sync({force:true});