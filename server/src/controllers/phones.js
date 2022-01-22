const Client = require('../models/Client');
const Phone = require('../models/Phone');

const getPhones = async (req, res) => {
    try {
        const Phones = await Phone.findAll({
            attributes: ['id', 'mark', 'model', 'serialNumber', 'problem', /* 'client_id' */],
            include: [{
                model: Client,
                attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email']

            }]

        })

        res.status(200).json(Phones)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'algo malo paso'
        })
    }
}

const getPhoneById = async (req, res) => {
    const { id } = req.params;

    try {
        const phone = await Phone.findOne({
            where: { id },
            attributes:  ['id', 'mark', 'model', 'serialNumber', 'problem', /* 'client_id' */],
        })
    
        res.status(200).json(phone)
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Algo salio mal',
            data: {}
        })
    }
}

const getPhonesByClient = async (req, res) => {
    const { client_id } = req.params;

    try {
        const phones = await Phone.findAll({
            where: { client_id },
            attributes:  ['id', 'mark', 'model', 'serialNumber', 'problem', /* 'client_id' */],
        })
    
        res.status(200).json(phones)
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Algo salio mal',
            data: {}
        })
    }
}


const createPhone = async ( req, res ) => {
    const { mark, model, serialNumber, problem, client_id } = req.body
    
    try {
        const newPhone = await Phone.create({
            mark, model, serialNumber, problem, client_id 
        }, {
            fields: ['mark', 'model', 'serialNumber', 'problem', 'client_id']
        })

        if(newPhone) { 
            return res.status(200).json({
                message: 'Telefono creado correctamente',
                data: newPhone
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
    getPhones,
    getPhoneById,
    getPhonesByClient,
    createPhone
}