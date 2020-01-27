const express = require('express');
const router = express.Router();
const Obras = require('../controllers/obras');

router.get('/:id', (req, res) => {
  Obras.showId(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

router.get('/', (req, res) => {
  if(req.query.by)
    if(req.query.by == "compositor"){
      Obras.filtrarComp(req.query.by)
          .then(data => res.jsonp(data))
          .catch(erro => res.status(500).jsonp(erro))
      }
      else {
          Obras.filtrarInst(req.query.by)
          .then(data => res.jsonp(data))
          .catch(erro => res.status(500).jsonp(erro))
      }
    else
      Obras.index(req.query)
        .then(data => res.jsonp(data))
        .catch(err => res.status(400).jsonp(err));
});



module.exports = router;
