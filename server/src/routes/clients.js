const Router = require('express');
const { check } = require('express-validator');

const { getClients, createClient, getClientById } = require('../controllers/clients');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getClients);

router.get('/:id', getClientById);

router.post('/', [
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('phoneNumber', 'El numero de telefono es obligatorio').not().isEmpty().exists(),
    check('email', 'El correo electronico es obligatorio').not().isEmpty().exists().isEmail(),
    validarCampos
], createClient);

router.use( (req, res)  => {
    res.status(404).end()
})

router.use( (error, req, res) => {
	console.log(error)
	console.log(error.name)

	if(error.name === 'CastError') {
		res.status(400).send({ error: 'El id es incorrecto'})
	} else {
		res.status(500).end()
	}
})


module.exports = router;