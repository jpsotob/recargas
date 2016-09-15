const express = require('express');
const jwt = require('jsonwebtoken');
const Store = require('../models/Store');


const routes = express.Router();


routes.post('/authenticate', (req, res) => {
  const { code } = req.body;
  console.log(req.body)

  if (code === undefined) {
    return res.status(400).send({success: false, message: "No se incluyo clave de tienda"})
  }

  Store.get(code, (err, response) => {
    if (err) {
      return res.status(403).send({success: false});
    } else if (!response) {
      return res.status(400).send({success: false, message: "Clave incorrecta"});
    } else {
      const store = JSON.parse(response);

      const token = jwt.sign({ store: store.nombre }, req.app.settings.jwtSecret, {
        expiresIn: '24h'
      });

      console.log('XD');

      res.json({
        success: true,
        message: 'Token generado',
        name: store.nombre,
        token
      });
    }
  });
});


module.exports = routes;
