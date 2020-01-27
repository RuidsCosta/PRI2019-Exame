const express = require('express');
const router = express.Router();
const ObrasQuant = require('../controllers/obras_quant');

router.get('/', (req, res) => {
  ObrasQuant.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
