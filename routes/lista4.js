const express = require('express')
const router = express.Router()

router.post('/exercicio1', function (req, res) {

    const numeros = req.body

    let soma = 0
    for (let n of numeros) {
        soma += n
    }

    const media = soma / numeros.length

    res.json({ media })
})
router.post('/exercicio2', function (req, res) {
    const numeros = req.body.numeros

    let maior = numeros[0]
    let menor = numeros[0]

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }

    res.json({ menormaior: maior, menor: menor })


})
router.post('/exercicio3', function (req, res) {
    let numeros = []
    for (let i = 1; i <= 10; i++) {
    }

    res.json({ numeros })
})
router.post('/exercicio4', function (req, res) {
    let numeros = []
    for (let i = 10; i >= 1; i--) {
        numeros.push(i)
    }
    res.json({ numeros })


})
router.post('/exercicio5', function (req, res) {
    let numeros = []
    for (let i = 101; i <= 110; i++) {
        numeros.push(i)
    }
    res.json({ numeros })


})
router.post('/exercicio6', function (req, res) {
    let numeros = req.body.numeros
    let soma = 0
    for (i in numeros) {
        soma += numeros[i]
    }
    res.json({ soma })
})
router.post('/exercicio7', function (req, res) {
    let n = req.body.n
    let pares = []
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        }
    }
    res.json({ pares })

})
router.post('/exercicio8', function (req, res) {

    let numeros = req.body.numeros
    let negativos = 0
    for (i in numeros) {
        if (numeros[i] < 0) {
            negativos++
        }
    }
    res.json({ negativos })
})
router.post('/exercicio9', function (req, res) {
    let numeros = req.body.numeros
    let negativos = []
    for (i in numeros) {
        if (numeros[i] < 0) {
            negativos.push(numeros[i])
        }
    }
    res.json({ negativos })


})
router.post('/exercicio10', function (req, res) {
    let numeros = req.body.numeros
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for (i in numeros) {
        if (numeros >= 10 && numeros <= 20) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }
    res.json({ dentroDoIntervalo10e20: dentroIntervalo, foraIntervalo: foraIntervalo })
})
router.post('/exercicio11', function (req, res) {
    const numeros = req.body.numeros
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length
    res.json({media})
    
})
router.post('/exercicio12', function (req, res) {
    const numeros = req.body.numeros
    let soma = 0
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    const media = soma / numeros.length
    res.json({media})


})
router.post('/exercicio13', function (req, res) {
    const numeros = req.body.numeros;
    const triplos = [];
    
    for (i in numeros) {
        triplos.push(numeros[i] * 3);
    }
    
    res.json({ triplos });
})

router.post('/exercicio14', function (req, res) {
    const numeros = req.body.numeros
    const dobros = []
    
    for (i in numeros) {
        dobros.push(numeros[i] * 2);
    }
    
    res.json({ dobros })
})

router.post('/exercicio15', function (req, res) {
    const numeros = req.body.numeros;
    let soma = 0;
    
    for (i in numeros) {
        if (numeros[i] < 40) {
            soma += numeros[i];
        }
    }
    
    res.json({ soma })
})

router.post('/exercicio16', function (req, res) {
    
    const {totalMercadorias,valoresMercadorias} = req.body
    
    let valorTotalEstoque = 0
    for (let i = 0; i < valoresMercadorias.length; i++) {
        valorTotalEstoque += valoresMercadorias[i] * totalMercadorias
    }
    
    const mediaValorMercadorias = valorTotalEstoque / totalMercadorias
    
    res.json({ valorTotalEstoque, mediaValorMercadorias })
})

router.post('/exercicio17', function (req, res) {
    const inicioIntervalo = req.body.inicioIntervalo;
    const fimIntervalo = req.body.fimIntervalo;
    
    let soma = 0
    const impares = []
    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
        if (i % 2 !== 0) {
            impares.push(i)
            soma += i
        }
    }
    
    res.json({ impares, soma })
})

router.post('/exercicio18', function (req, res) {
    const valores = req.body.numeros
    
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    
    for (i in valores) {
        if (valores[i] > maior) {
            maior = valores[i]
        }
        if (valores[i] < menor) {
            menor = valores[i]
        }
        soma += valores[i]
    }
    
    const media = soma / valores.length
    
    res.json({ maior, menor, media })
})


router.post('/exercicio19', function (req, res) {
    const alunos = req.body.alunos;
    
    const cursos = {
        1: 'Sistemas de Informação',
        2: 'Ciência da Computação',
        3: 'Engenharia Civil'
    };
    
    const numAlunosPorCurso = [0, 0, 0]
    const numAlunosIdade20a25PorCurso = [0, 0, 0]
    let totalIdade20a25 = 0;
    let menorMediaIdadeCurso = Infinity
    let cursoMenorMediaIdade = ''
    
    for (let i = 0; i < alunos.length; i++) {
        const curso = alunos[i].curso;
        const idade = alunos[i].idade;
        
        numAlunosPorCurso[curso - 1]++
        
        if (idade >= 20 && idade <= 25) {
            numAlunosIdade20a25PorCurso[curso - 1]++;
            totalIdade20a25++
        }
        
        if (idade < menorMediaIdadeCurso) {
            menorMediaIdadeCurso = idade;
            cursoMenorMediaIdade = cursos[curso]
        }
    }
    
    res.json({ 
        numAlunosPorCurso,
        numAlunosIdade20a25PorCurso,
        cursoMenorMediaIdade
    })
})


router.post('/exercicio20', function (req, res) {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        let linha = [];
        for (let j = 1; j <= 10; j++) {
            linha.push(i * j);
        }
        tabuada.push(linha);
    }
    res.json({ tabuada });
})

router.post('/exercicio21', function (req, res) {
    const espectadores = req.body.espectadores;
    let qtdRespostas10 = 0;
    let somaIdades = 0;
    let qtdRespostas5ouMenos = 0;
    let pessoaMaisVelha = { nome: '', idade: -1 };

    for (let i = 0; i < espectadores.length; i++) {
        const pessoa = espectadores[i];
        somaIdades += pessoa.idade;
        
        if (pessoa.nota === 10) {
            qtdRespostas10++;
        }
        
        if (pessoa.nota <= 5) {
            qtdRespostas5ouMenos++;
        }
        
        if (pessoa.idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = { nome: pessoa.nome, idade: pessoa.idade };
        }
    }
    
    const mediaIdade = somaIdades / espectadores.length;
    const percentual5ouMenos = (qtdRespostas5ouMenos / espectadores.length) * 100;

    res.json({ qtdRespostas10, mediaIdade, percentual5ouMenos, pessoaMaisVelha });
})

router.post('/exercicio22', function (req, res) {
    const produtos = req.body.produtos;
    
    let maiorPreco = -Infinity;
    let somaPrecos = 0;
    
    for (let i = 0; i < produtos.length; i++) {
        const preco = produtos[i].preco;
        
        if (preco > maiorPreco) {
            maiorPreco = preco;
        }
        
        somaPrecos += preco;
    }
    
    const mediaPrecos = somaPrecos / produtos.length;

    res.json({ maiorPreco, mediaPrecos });
})


module.exports = router