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

// Phone.hasMany(Client, {
//     foreignKey: 'client_id',
//     sourceKey: 'id'
// });
// Client.belongsTo(Phone, {
//     foreignKey: 'client_id',
//     sourceKey: 'id'
// });

module.exports = Client;