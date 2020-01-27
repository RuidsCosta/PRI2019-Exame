const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.jsonp({ app: 'Arquivo de Música Digital' });
});

module.exports = router;
