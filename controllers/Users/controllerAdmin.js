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
                        id: results[0].id,
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

    getUsers(req, res) {
        const { typeUser } = req.params;
        
        if(typeUser == 'waiter') {
            const sql = 'SELECT * FROM waiter ORDER BY id desc';
            connection.query(sql, (error, results) => {
                if(results) {
                    res.status(200).json(results);
                }
            })
        } else if (typeUser == 'cooker') {
            const sql = 'SELECT * FROM cooker ORDER BY id desc';
            connection.query(sql, (error, results) => {
                if(results) {
                    res.status(200).json(results);
                }
            })
        } else if(typeUser == 'none') {
            res.status(200).json({
                message: 'Escolha o tipo de usuário'
            })
        }
    }

    deleteUser(req, res) {
        const { typeUser, id } = req.params;
        console.log(typeUser)
        if(typeUser == 'waiter') {
            const sql = `DELETE FROM waiter WHERE id = '${id}'`;
            connection.query(sql, (error, results) => {
                if(results) {
                    res.status(200).json({
                        message: 'Usuário deletado com sucesso'
                    })
                }
            })
        } else if(typeUser == 'cooker') {
            const sql = `DELETE FROM cooker WHERE id = '${id}'`;
            connection.query(sql, (error, results) => {
                if(results) {
                    res.status(200).json({
                        message: 'Usuário deletado com sucesso'
                    })
                }
            })
        }

    }
}

module.exports = new AdminController();