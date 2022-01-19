const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Repair = sequelize.define('repairs', {
    "id": { 
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
    "solution": {
        type: Sequelize.STRING
    },
    "price": {
        type: Sequelize.FLOAT
    },
    "date": {
        type: Sequelize.DATE
    },
    "phone_id":{
        type: Sequelize.INT
    }
}, {
    timestamps: false
});


module.exports = Repair;