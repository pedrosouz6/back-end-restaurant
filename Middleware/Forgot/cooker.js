const { connection } = require('../../config/connection');

module.exports = (req, res, next) => {
    const { emailForgot } = req.body;

    const sql = `SELECT * FROM cooker WHERE email = '${emailForgot}'`;
    connection.query(sql, (error, results) => {
        if(results) {
            console.log(results);
        }
    })
}