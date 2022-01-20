const { validationResult } = require('express-validator')

const validarCampos = ( req, res, next ) => {

    const errorFormatter = (({ msg }) => msg);

    const errors = validationResult(req).formatWith(errorFormatter);

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            erros: errors.mapped()
        })
    }

    next()
}


module.exports = {
    validarCampos
}