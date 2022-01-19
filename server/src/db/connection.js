const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})

connection.connect( (error) => {
    if( error ) {
        throw error;
    } else {
        console.log('Conexion Exitosa');
    }
})

// connection.query('SELECT * FROM clients', (error, results, fields)  => {
//     console.log(results);
// })

connection.end()