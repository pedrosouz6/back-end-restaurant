const { connection } = require('../../config/connection');

class ControllerForgot {
    CookerEmail(req, res) {
        const { emailForgot } = req.body;

        const sql = `SELECT * FROM cooker WHERE email = '${emailForgot}'`;
        connection.query(sql, (error, results) => {
            if(results.length === 1) {
                res.status(200).json({
                    exist: true
                })
            } else {
                res.status(200).json({
                    message: 'Usuário não existe'
                })
            }
        })
    }

    CookerPassword(req, res) {
        const { password, emailForgot } = req.body;
        const sql = `UPDATE cooker SET password = '${password}' WHERE email = '${emailForgot}'`;
        connection.query(sql, (error, results) => {
            if(results) {
                res.status(200).json({
                    success: true,
                    message: 'Senha alterada'
                })
            }
        })
    }

    WaiterEmail(req, res) {
        const { emailForgot } = req.body;

        const sql = `SELECT * FROM waiter WHERE email = '${emailForgot}'`;
        connection.query(sql, (error, results) => {
            if(results.length === 1) {
                res.status(200).json({
                    exist: true
                })
            } else {
                res.status(200).json({
                    message: 'Usuário não existe'
                })
            }
        })
    }

    WaiterPassword(req, res) {
        const { password, emailForgot } = req.body;
        console.log(emailForgot)
        const sql = `UPDATE waiter SET password = '${password}' WHERE email = '${emailForgot}'`;
        connection.query(sql, (error, results) => {
            if(results) {
                res.status(200).json({
                    success: true,
                    message: 'Senha alterada'
                })
            }
        })
    }
}

module.exports = new ControllerForgot;