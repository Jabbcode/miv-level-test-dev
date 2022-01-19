
const Client = require('../models/Client');

const getClients = async ( req, res ) => {
    try {
        const clients = await Client.findAll({
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email'],
        })

        res.json({
            data: clients
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'algo malo paso'
        })
    }
}


module.exports = {
    getClients
}