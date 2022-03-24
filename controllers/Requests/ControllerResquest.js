const { connection } = require('../../config/connection');

class RequestController {
    add(req, res) {
        const { dish, table, userId } = req.body;
        const sql = `INSERT INTO requests(name_request, id_user, table_request, status_request) VALUES('${dish}', '${userId}', '${table}', '3')`;
        connection.query(sql, (error, results) => {
            if(results) {
                console.log('certo')
            }
        });
    }

    get(req, res) {
        const { id } = req.params;
        console.log('id '+id);
        const sql = `SELECT * FROM requests WHERE id_user = '${id}' ORDER BY id_request desc`;
        connection.query(sql, (error, results) => {
            if(results) {
                res.status(200).json(results);
            }
        })
    }

    getAllRequests(req, res) {
        const sql = 'SELECT * FROM requests ORDER BY id_request desc';
        connection.query(sql, (error, results) => {
            if(results) {
                res.status(200).json(results);
            }
        })
    }
}

module.exports = new RequestController();