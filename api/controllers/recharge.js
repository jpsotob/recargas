const express = require('express');
const Store = require('../models/Store');
const isAuthenticated = require('../middleware/auth');

const db = require('../db');

const routes = express.Router();

routes.use(isAuthenticated);

routes.post('/recharge', (req, res) => {
  db.get('next_tx_id', (err, next) => {
    db.set(`tx:${next}`, JSON.stringify(req.body));
    res.json({
      success: true,
      id: next
    });

    db.incr('next_tx_id');
  });
});

routes.get('/recharge/:id/recharge', (req, res) => {
  res.json({
    success: true
  });
});

module.exports = routes;
