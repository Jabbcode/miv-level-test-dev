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

        res.json({
            data: Phones
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'algo malo paso'
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
    
        res.json({
            data:phones
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Algo salio mal',
            data: {}
        })
    }
}


module.exports = {
    getPhones,
    getPhonesByClient
}