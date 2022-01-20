const Router = require('express');
const { check } = require('express-validator');

const { getPhones, getPhonesByClient, createPhone } = require('../controllers/phones');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getPhones);

router.get('/client/:client_id', getPhonesByClient);

router.post('/', [
    check('mark', 'La marca es obligatorio').not().isEmpty(),
    check('model', 'El modelo es obligatorio').not().isEmpty(),
    check('serialNumber', 'El numeo de serial es obligatorio').not().isEmpty(),
    check('problem', 'Debe ingresar cual es el problema del telefono').not().isEmpty(),
    check('client_id', 'Debe ingresar el cliente al cual pertenece el telefono').not().isEmpty(),
    validarCampos
], createPhone);

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