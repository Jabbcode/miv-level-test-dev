const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Client = sequelize.define('clients', {
    "id": { 
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
    "firstName": {
        type: Sequelize.STRING
    },
    "lastName": {
        type: Sequelize.STRING
    },
    "phoneNumber": {
        type: Sequelize.STRING
    },
    "email":{
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});


module.exports = Client;