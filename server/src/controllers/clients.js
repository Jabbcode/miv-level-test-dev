const Client = require('../models/Client');

const getClients = async ( req, res ) => {
    try {
        const clients = await Client.findAll({
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email']
            
        })

        res.status(200).json(clients)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const getClientById = async (req, res, next) => {
    try {
        const { id } = req.params
        const client = await Client.findAll({
            where: { id },
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email']
        })

        client ? res.status(200).json(client) : res.status(404).send()
    } catch (error) {
        next(error)
    }
}

const createClient = async ( req, res ) => {
    const { firstName, lastName, phoneNumber, email } = req.body
    
    try {

        const client = await Client.findOne({
            where: { email },
            attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email']
        })

        if(client) {
            return res.status(400).json({
                message: 'Ya existe un cliente con ese correo'
            })
        }

        const newClient = await Client.create({
            firstName, lastName, phoneNumber, email
        }, {
            fields: ['firstName', 'lastName', 'phoneNumber', 'email']
        })

        if(newClient) { 
            return res.status(200).json({
                message: 'Cliente creado correctamente',
                data: newClient
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
}


module.exports = {
    getClients,
    getClientById,
    createClient
}