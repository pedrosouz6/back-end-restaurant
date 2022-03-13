const { connection } = require('../config/connection');
const jtw = require('jsonwebtoken');
const config = require('../config/auth');

class CookerController {
    create(req, res) {
        const { email, password } = req.body;
        const sql = `INSERT INTO cooker(email, password) VALUES('${email}', '${password}')`;
        connection.query(sql, (erro, results) => {
            if (results) {
                console.log(results.insertId)

                res.status(200).json({
                    user: {
                        email,
                        password
                    },
                    token: jtw.sign(
                        {id: results.insertId},
                        config.secret,
                        {expiresIn: config.expireIn}
                    )
                })
            }
        });
    }

    get(req, res) {
        const sql = 'SELECT * FROM cooker';
        connection.query(sql, (error, results) => {
            if(results) {
                res.status(201).json({data: results})
            }
        })
    }

    delete(req, res) {
        const { id } = req.params;
        const sql = `DELETE FROM cooker WHERE id = '${id}'`;
        connection.query(sql);
    }

    update(req, res) {
        const { id } = req.params;
        const { email, password } = req.body;
        const sql = `UPDATE cooker SET email = '${email}', password = '${password}' WHERE id = '${id}'`;
        connection.query(sql);
    }
}

module.exports = new CookerController();