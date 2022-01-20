require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json())
app.use(cors())

require('./db/connection');

app.use('/api/clients', require('./routes/clients'));

app.use('/api/phones', require('./routes/phones'));

app.use('/api/repairs', require('./routes/repairs'));

app.use('/api/auth', require('./routes/auth') );



app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${ process.env.PORT }`);
})