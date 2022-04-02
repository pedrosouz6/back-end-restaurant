const { connection } = require('../../config/connection');
const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

class WaiterController {
    create(req, res) {
        const { name, email, password } = req.body;
        const sql = `INSERT INTO waiter(name, email, password) 
        VALUES ('${name}', '${email}', '${password}')`;

        connection.query(sql, (error, results) => {
            if(results) {
                res.status(200).json({
                    user: {
                        id: results.insertId,
                        name,
                        password,
                        email,
                        type: '2'
                    },
                    token: jwt.sign(
                        {id: results.insertId},
                        config.secret,
                        {expiresIn: config.expireIn}
                    )
                })
            } else {
                console.log(error)
            }
        })
    }

    login(req, res) {
        const { email, password } = req.body;

        const sql = `
        SELECT * FROM waiter 
        WHERE email = '${email}' && 
        password = '${password}'`;

        connection.query(sql, (error, results) => {
            if(results.length > 0) {
                console.log(results[0].id)
                res.status(200).json({
                    user: {
                        id: results[0].id,
                        name: results[0].name,
                        email,
                        password,
                        type: '2'
                    },
                    token: jwt.sign(
                        {id: results[0].id},
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

module.exports = new WaiterController();