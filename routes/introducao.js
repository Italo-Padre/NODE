const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    /* o que tiver dentro da função executa ao chamar o endpoint  */
    console.log('rota principal');
    res.json('chegou a resposta')
})
router.get('/nome', function(req, res){
    /* o que tiver dentro da função executa ao chamar o endpoint  */
    console.log('rota principal');
    res.json('italo rodrigues')
})
router.get('/hellow', function(req, res){
    /* o que tiver dentro da função executa ao chamar o endpoint  */
    console.log('teste hellow 2');
    res.json('chegou a resposta')
})

module.exports = router