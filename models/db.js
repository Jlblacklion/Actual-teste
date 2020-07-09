const Sequelize = require("sequelize")

const sequelize = new Sequelize('namedb', 'user', 'password',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}