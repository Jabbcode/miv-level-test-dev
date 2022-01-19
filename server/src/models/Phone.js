const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Phone = sequelize.define('phones', {
    "id": { 
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
    "mark": {
        type: Sequelize.STRING
    },
    "model": {
        type: Sequelize.STRING
    },
    "serialNumber": {
        type: Sequelize.STRING
    },
    "problem":{
        type: Sequelize.STRING
    },
    "client_id":{
        type: Sequelize.INT
    }
}, {
    timestamps: false
});


module.exports = Phone;