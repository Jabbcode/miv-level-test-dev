const Sequelize = require('sequelize');
const sequelize = require('../db/connection');
const Client = require('./Client');

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
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Phone.belongsTo(Client, {
    foreignKey: 'client_id',
    sourceKey: 'id'
});
Client.hasMany(Phone, {
    foreignKey: 'client_id',
    sourceKey: 'id'
});


module.exports = Phone;