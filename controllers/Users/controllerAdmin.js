const { connection } = require('../../config/connection');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

class AdminController {
    login(req, res) {
        const { email, password } = req.body;

        const sql = `
        SELECT * FROM admin 
        WHERE email = '${email}' && 
        password = '${password}'`;

        connection.query(sql, (error, results) => {
            if(results.length > 0) {
                res.status(200).json({
                    user: {
                        name: results[0].name,
                        email,
                        password,
                        type: '3'
                    },
                    token: jwt.sign(
                        {id: results.insertId},
                        config.secret,
                        {expiresIn: config.expireIn}
                    )
                })
            } else {
                res.status(200).json({
                    error:  true,
                    message: 'User not exists'
                })
            }
        })
    }
}

module.exports = new AdminController();