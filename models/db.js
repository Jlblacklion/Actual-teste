const { Sequelize } = require('sequelize');
// Conexão Sequelize
const sequelize = new Sequelize('leads', 'root', 'Joelroot@3010', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequilize: Sequilize,
    sequilize: sequilize,
};