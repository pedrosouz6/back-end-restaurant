const {connection} = require('../../config/connection');

class ControllerDish {
    add(req, res) {
        const { nameDish, ingredients, price, note } = req.body;
        const sql = `INSERT INTO menu(name_dish, ingredients_dish, price_dish, note_dish) 
        VALUES('${nameDish}', '${ingredients}', '${price}', '${note}')`;

        connection.query(sql, (error, results) => {
            if(results) {
                res.status(200).json({
                    message: 'New dish added'
                })
            }
        })
    }

    get(req, res) {
        const sql = 'SELECT * FROM menu';
        connection.query(sql, (error, results) => {
            if(results) {
                return res.status(200).json(results);
            }

            res.status(200).json({
                error: true
            });
        })
    }
}

module.exports = new ControllerDish();