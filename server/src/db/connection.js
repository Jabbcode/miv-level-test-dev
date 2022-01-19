const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
);


sequelize.authenticate()
    .then(() => {
        console.log('Conexion establecida correctamente.');
    })
    .catch((error) => {
        console.error('Error al conectarse a la base de datos:', error);
        sequelize.close();
    })


module.exports = sequelize;