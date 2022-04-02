const { secret } = require('../../config/auth');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;

    if(!auth) {
        return res.json({
            error: true,
            message: 'Sem o token'
        })
    }

    const [ ,  token] = auth.split(' ');
    
    jwt.verify(token, secret, (error, decoded) => {
        if(error) {
            return res.json({
                error: true,
                message: 'Token inválido'
            })
        } else if(decoded) {
            return res.json({
                error: false,
                message: 'Token válido'
            }) 
        }
    })
}