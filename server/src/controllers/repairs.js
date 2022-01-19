const Repair = require('../models/Repair');
const Phone = require('../models/Phone');
const Client = require('../models/Client');

const getRepairs = async (req, res) => {
    try {
        const Repairs = await Repair.findAll({
            order: [
                ['date', 'DESC']
            ],
            attributes: ['id', 'solution', 'price', 'date', /* 'phone_id' */],
            include: [{
                model: Phone,
                attributes: ['id', 'mark', 'model', 'serialNumber', 'problem', /* 'client_id' */],
                include: [{
                    model: Client,
                    attributes: ['id', 'firstName', 'lastName', 'phoneNumber', 'email']
                }]
            }]
        })

        res.status(200).json({
            data: Repairs
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'algo malo paso'
        })
    }
}

const getRepairsByPhone = async (req, res) => {
    const { phone_id } = req.params;
    console.log(phone_id);
    try {
        const Repairs = await Repair.findAll({
            where: { phone_id },
            attributes: ['id', 'solution', 'price', 'date' /* 'phone_id' */],
        })

        res.status(200).json({
            data: Repairs
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Algo salio mal',
            data: {}
        })
    }
}

const createRepair = async (req, res) => {
    const { solution, price, date, phone_id } = req.body
    
    try {
        const newRepair = await Repair.create({
            solution, price, date, phone_id
        }, {
            fields: ['solution', 'price', 'date', 'phone_id']
        })

        if(newRepair) { 
            return res.status(200).json({
                message: 'Reparacion creada correctamente',
                data: newRepair
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
    getRepairs,
    getRepairsByPhone,
    createRepair
}