const { connection } = require('../../config/connection');

class RequestController {
    add() {
        const sql = 'INSERT INTO requests(id_request, id_user, name_request, table_request) VALUES("1", "2", "3", "4")';
        connection.query(sql);
    }
}

module.exports = new RequestController();