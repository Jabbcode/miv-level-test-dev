const { Router } = require('express');
const { check } = require('express-validator');
const { userCreate, login, renovarToken, allUser } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validadJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post( '/new',[
    check('username', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], userCreate);

router.post( '/',[ 
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    validarCampos
], login);

router.get( '/renew',[
    validadJWT
], renovarToken);

router.get('/users', allUser);

module.exports = router;