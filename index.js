const express = require('express');
const app = express();
const port = 3000;


app.get('/calculadora', (req, res) => {
    const operacao = req.query.operacao;
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    if (!operacao || isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Bad request: parâmetros inválidos.');
    }

    let resultado;

    if (operacao === 'soma') {
        resultado = n1 + n2;
    } else if (operacao === 'subtracao') {
        resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') {
        resultado = n1 * n2;
    } else if (operacao === 'divisao') {
        if (n2 === 0) {
            return res.status(400).send('Bad request: divisão por zero.');
        }
        resultado = n1 / n2;
    } else {
        return res.status(400).send('Bad request: operação inválida.');
    }

    res.send(`Resultado: ${resultado}`);
});

app.listen(port, () => {
    console.log(`Web Service rodando em http://localhost:${port}`);
});