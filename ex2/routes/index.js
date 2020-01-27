var express = require('express');
var router = express.Router();
var axios = require('axios')

var apikey = "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"

router.get('/', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/legislacao' + apikey)
    .then(dados => res.render('index', {lista: dados.data}))
    .catch(e => res.render('error', {error: e}))
});



router.get('/:id', function(req, res) {
 
  axios.all([
      axios.get('http://clav-api.dglab.gov.pt/api/legislacao/' + req.params.id + apikey),
      axios.get('http://clav-api.dglab.gov.pt/api/legislacao/' + req.params.id + '/processos' + apikey)
    ])
    .then(axios.spread((id, processos) => {
      res.render('individual', {item: id.data, elem : processos.data})
    }));

});

module.exports = router;

