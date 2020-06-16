
var db = require("./db");
var dateFormat = require('dateformat')

let model = {
    getProducts: (cb) => {
        return db.query("SELECT * FROM products", cb)
    },
    getProduct: (id, cb) => {
        return db.query("SELECT * FROM products WHERE id=?", [id], cb)
    },
    addProduct: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            nombre: input.nombre,
            stock: input.stock,
            precio: input.precio,
            estatus: input.estatus,
            created_at: currentDate
        }
        return db.query("INSERT INTO products SET ?", [data], cb)
    },
    updateProduct: (input, cb) => {
        let data = {
            nombre: input.nombre,
            stock: input.stock,
            precio: input.precio,
            estatus: input.estatus,
        }
        return db.query("UPDATE products SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteProduct: (id, cb) => {
        return db.query("DELETE FROM products WHERE id=?", [id], cb);
    }
}

module.exports = model;
