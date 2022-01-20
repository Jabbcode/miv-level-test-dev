const Sequelize = require('sequelize');
const sequelize = require('../db/connection');
const Phone = require('./Phone');

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
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Repair.belongsTo(Phone, {
    foreignKey: 'phone_id',
    sourceKey: 'id'
});
Phone.hasMany(Repair, {
    foreignKey: 'phone_id',
    sourceKey: 'id'
});


module.exports = Repair;