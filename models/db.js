const Sequelize = require("sequelize")

const sequelize = new Sequelize('leads', 'root', 'Joelroot@3010',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}