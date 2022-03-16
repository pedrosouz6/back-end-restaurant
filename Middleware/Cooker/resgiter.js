const { connection } = require('../../config/connection');

module.exports = (req, res, next) => {
    const { email, password } = req.body;

    const sql = `
    SELECT * FROM cooker 
    WHERE email = '${email}' && 
    password = '${password}'`;

    connection.query(sql, (error, results) => {
        if(results) {
            return res.status(409).json({
                error: true,
                message: 'This user already exists'
            })
        }

        next();
    })
}