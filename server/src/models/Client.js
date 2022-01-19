const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../db/connection');

const Client = sequelize.define('clients', {
    "id": { 
        type: Sequelize.DataTypes.INTEGER, 
        primaryKey: true
    },
    "firstName": {
        type: DataTypes.STRING
    },
    "lastName": {
        type: DataTypes.STRING
    },
    "phoneNumber": {
        type: DataTypes.STRING
    },
    "email":{
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = Client;