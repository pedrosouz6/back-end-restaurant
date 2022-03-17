const { connection } = require('../../config/connection');

module.exports = (req, res, next) => {
    const { email } = req.body;

    const sql = `
    SELECT * FROM cooker 
    WHERE email = '${email}'`;

    connection.query(sql, (error, results) => {
        if(results.length > 0) {
            return res.status(200).json({
                error: true,
                message: 'This user already exists'
            });
        } 
        
        next();
    })
}