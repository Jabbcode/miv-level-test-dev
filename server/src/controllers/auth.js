const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const userCreate = async(req, res) => {

    const { username, email, password } = req.body

    try {
        const dbUser = await User.findOne({ 
            where: { email: email }
        });
        
        if( dbUser ) {
            return res.status(400).json({
                ok: false,
                message: 'Ya existe un usuario con esas credenciales'
            });
        }

        const salt = bcrypt.genSaltSync();
        hashPassword = bcrypt.hashSync( password, salt );

        const newUser = await User.create({
            username, email, password: hashPassword
        }, {
            fields: ['username', 'email', 'password']
        })
    
        const token = await generarJWT( newUser.null, newUser.username );
        return res.status(201).json({
            token: token
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Por favor hable con el administrador'
        });
    }    
}

const login = async(req, res) => {

    const { email, password } = req.body

    try {
        
        const dbUser = await User.findOne({
            where: { email: email }
        });
        
        if( !dbUser ) {
            return res.status(400).json({
                msg: 'Las credenciales no son correctas'
            });
        }

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ) {
            return res.status(400).json({
                msg: 'Las credenciales no son correctas'
            })
        }

        const token = await generarJWT( dbUser.id, dbUser.username );
        return res.status(200).json({
            name: dbUser.name,
            email: dbUser.email,
            token: token
        });

    } catch (error) {
        console.log( error )
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

const renovarToken = async(req, res) => {

    const { id, username } = req;

    const token = await generarJWT( id, username );

    const status = true
    return res.json(status);
}

const allUser = async(req, res) => {

    const usuarios = await User.findAll({
        attributes: ['id', 'username', 'password']
    });

    return res.status(200).json({
        data: usuarios
    });
}


module.exports = {
    userCreate,
    login,
    renovarToken,
    allUser
}