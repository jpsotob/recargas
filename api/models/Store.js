/**
 * Representa la tienda
 */

const db = require('../db');


const get = (code, callback) => {
  db.hget('stores', code, callback);
}

module.exports = { get };
