const express = require('express')
const router = express.Router() /* ROTEADOR */

const lista1 = require('./lista1')
const lista2 = require('./lista2')
const lista3 = require('./lista3')
const introducao = require('./introducao')

router.use('/lista1', lista1)
router.use('/lista2', lista2)
router.use('/lista3', lista3)
router.use('/introducao', introducao)

module.exports = router