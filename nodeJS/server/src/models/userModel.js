const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const user = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING}
})
module.exports = {
    user
}