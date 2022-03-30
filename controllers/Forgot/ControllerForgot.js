const { connection } = require('../../config/connection');

class ControllerForgot {
    cooker(req, res) {
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
}

module.exports = new ControllerForgot;