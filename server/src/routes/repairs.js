const Router = require('express');
const { check } = require('express-validator');

const { getRepairs, getRepairsByPhone, createRepair } = require('../controllers/Repairs');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getRepairs);
router.get('/phone/:phone_id', getRepairsByPhone);

router.post('/', [
    check('solution', 'Debe ingresar cual fue la solucion del problema').not().isEmpty(),
    check('price', 'El costo es obligatorio').not().isEmpty(),
    check('date', 'Ingrese la fecha').not().isEmpty(),
    check('phone_id', 'Debe ingresar el telefono al que se le soluciono el problema').not().isEmpty(),
    validarCampos
], createRepair);

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