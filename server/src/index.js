require('dotenv').config()
const cors = require('cors');
require('./db/connection');
const express = require('express');
const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hola mundo')
})


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${ process.env.PORT }`);
})