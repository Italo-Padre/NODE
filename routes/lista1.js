const express = require('express')
const router = express.Router() /* ROTEADOR */


router.post('/exercicio1', function (req, res) {

    const { n1, n2, n3, n4 } = req.body

    total = n1 + n2 + n3 + n4
    media = total / 4
    if (media > 10) {
        alert('insira notas validas')
    } else {

        if (media > 7) {
            res.json('parabéns nota' + media + ' Aprovado')
        } else {
            res.json('sua nota foi ' + media + ' Reprovado')
        }
    }

})

router.post('/exercicio2', function (req, res) {
    /* o que tiver dentro da função executa ao chamar o endpoint  */

    const municipio = Number(req.body.municipio)
    const branco = Number(req.body.branco)
    const nulo = Number(req.body.nulo)
    const validos = Number(req.body.validos)
    let total = branco + nulo + validos

    let retorno = {}
    if (total > municipio) {
        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: 'A soma dos votos não pode passar do total de eleitores'
        }
        res.status(400).json(retorno)
    } else {

        const percentualVotosBrancos = (branco / municipio) * 100
        const percentualVotosNulos = (nulo / municipio) * 100
        const percentualVotosValidos = (validos / municipio) * 100
        retorno = { percentualVotosBrancos, percentualVotosNulos, percentualVotosValidos }
        res.status(200).json(retorno)

    }

})

router.post('/exercicio3', function (req, res) {

    const {salario, aumento} = req.body

   

    const percentual = aumento / 100
    novoSalario = (salario * percentual) + salario

    res.json('Novo salário é igual a ' + novoSalario)

})

router.post('/exercicio4', function(req, res){

    const {valorFabrica, valorDistribuidor} = req.body
    
    const ValorTotalImposto = (valorDistribuidor*0.48) + valorDistribuidor
    res.json('Valor final é  '+ ValorTotalImposto)

    
})
router.post('/exercicio5', function(req, res){

    const {valorFabrica, distribuidor, imposto} = req.body
    
    const valorDistribuidor =parseInt( (valorFabrica*distribuidor/100) + valorFabrica )
    const ValorTotalImposto = (valorDistribuidor*imposto/100) + valorDistribuidor
    res.json('Valor final é  '+ ValorTotalImposto)

    
})
router.post('/exercicio6', function(req, res){

    const {quantdCarros, valorCarro, valorTotal, salario} = req.body

    

    const comissaoTotal = quantdCarros*valorCarro
    const comissaoVendas = valorTotal*0.05
    const salFinal = comissaoTotal + comissaoVendas + salario

    res.json(`seu salário total é ${salFinal}`)

})
router.post('/exercicio7', function(req, res){

    const {n1,n2} = req.body

    
    media = (n1*0.4) + (n2*0.6)
    if(media>10){
        res.json('Insira notas válidas')
    }else{
        res.json('sua nota é '+ media)
    }
   

})
router.post('/exercicio8', function(req, res){

    const {raio, altura} = req.body

   
    volume = 3.14*raio**2*altura
   res.json('O volume é  ' + volume)

})
router.post('/exercicio9', function(req, res){

    const {primeiro, segundo} = req.body

    resultado = (primeiro*segundo) * primeiro
    res.json('o resultado é '+ resultado)

})

module.exports = router /* exposrtar o roteador pra ser utilizado em outros arquivos */