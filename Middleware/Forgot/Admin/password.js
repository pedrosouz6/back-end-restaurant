const { connection } = require('../../../config/connection');

module.exports = (req, res, next) => {
    const { emailForgot, password } = req.body;
    console.log({ emailForgot, password });

    const sql = `SELECT * FROM admin WHERE email = '${emailForgot}' AND password = '${password}'`;

    connection.query(sql, (error, results) => {
        if(results.length === 1) {
            return res.status(200).json({
                success: false,
                message: 'Você já usou essa senha'
            });
        }

        return next();
    })
}