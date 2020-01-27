const express = require('express');
const router = express.Router();
const Compositores = require('../controllers/compositores');

router.get('/', (req, res) => {
  Compositores.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
