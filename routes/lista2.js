const express = require('express')
const router = express.Router()

router.post('/exercicio1', function (req, res) {
    const {qntMin, qntMax} = req.body

    const estoqueMedio = (qntMin + qntMax)/2
    res.json({estoqueMedio})
})

router.post('/exercicio2', function (req, res) {
    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.json({salarioBruto, bonificacaoFilhos, salarioFinal})

})

router.post('/exercicio3', function (req, res) {
    const {anos, meses, dias} = req.body
    const total = (anos*365) + (meses*30) + dias
    res.json({total: total})
   
})

router.post('/exercicio4', function(req, res){
    const {dias} = req.body
    const meses = dias/30
    const anos = dias/365

    const retorno = {
        IdadeMeses : meses,
        IdadeAnos : anos

    }
   res.json({retorno})

    
})
router.post('/exercicio5', function(req, res){
    const {nota1, nota2, nota3} = req.body
    notaFinal = (nota1 * 0,2)+(nota2*0,3)+(nota3*0,5)
    res.json({NotaFinal: notaFinal})
  
    
})
router.post('/exercicio6', function(req, res){

  const {duracaoSegundos} = req.body
  const horas = duracaoSegundos/3600
  const minutos = horas*60
  const retorno = {
    duracaoHoras : horas,
    duracaoMinutos : minutos,
    duracaoEmSegundos : duracaoSegundos
  }
  res.json({retorno})
})
router.post('/exercicio7', function(req, res){

   const {nome, salarioFixo, totalVendas, percentualSobreVendas} = req.body
   const adicional = totalVendas * (percentualSobreVendas/100)
   const salarioFinal = salarioFixo + adicional
    const retorno ={
        nomeVendedor : nome,
        Salario : salarioFinal
    }
   res.json({retorno})

})
router.post('/exercicio8', function(req, res){
    const {nome, distancia, tempo} = req.body

    velMedia = distancia/tempo
    res.json(`A velocidade média do ${nome}, foi ${velMedia} km/h.`)

    
})
router.post('/exercicio9', function(req, res){
    
    const {salario} = req.body
    let salFinal = 0
    salFinal = salario < 1000 ? res.json('Salario não compativel com aumento') : 
    salFinal = (salario *  0.30 ) + salario
    res.json({salFinal})

   
})

module.exports = router