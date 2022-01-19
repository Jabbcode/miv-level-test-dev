const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const User = sequelize.define('users', {
    "id": { 
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
    "username": {
        type: Sequelize.STRING
    },
    "password": {
        type: Sequelize.STRING
    },
}, {
    timestamps: false
});


module.exports = User;