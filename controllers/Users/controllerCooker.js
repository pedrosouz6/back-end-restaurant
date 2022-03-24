const { connection } = require('../../config/connection');
const jtw = require('jsonwebtoken');
const config = require('../../config/auth');

class CookerController {
    create(req, res) {
        const { name, email, password } = req.body;
        const sql = `INSERT INTO cooker(name, email, password) VALUES('${name}', '${email}', '${password}')`;
        connection.query(sql, (erro, results) => {
            if (results) {
                console.log(results.insertId)

                res.status(200).json({
                    user: {
                        id: results.insertId,
                        name,
                        email,
                        password,
                        type: '1'
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

    login(req, res) {
        const { email, password } = req.body;

        const sql = `
        SELECT * FROM cooker 
        WHERE email = '${email}' && 
        password = '${password}'`;

        connection.query(sql, (error, results) => {
            console.log(results)
            if(results.length > 0) {
                res.status(200).json({
                    user: {
                        id: results[0].id,
                        name: results[0].name,
                        email,
                        password,
                        type: '1'
                    },
                    token: jtw.sign(
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

module.exports = new CookerController();