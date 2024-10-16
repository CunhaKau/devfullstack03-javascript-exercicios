// Criando um array de objetos "Produto"
const produtos = [
    { nome: 'Camiseta', preço: 20, quantidade: 10 },
    { nome: 'Calça', preço: 50, quantidade: 5 },
    { nome: 'Tênis', preço: 80, quantidade: 3 }
];

// Função para calcular o valor total em estoque
function calcularValorTotal(produtos) {
    let valorTotal = 0;
    produtos.forEach(produto => {
        valorTotal += produto.preço * produto.quantidade;
    });
    return valorTotal;
}

// Calculando e imprimindo o valor total
const valorTotalEmEstoque = calcularValorTotal(produtos);
console.log("Valor total em estoque:", valorTotalEmEstoque);





// Criando um objeto "Estudante"
const estudante = {
    nome: 'João',
    notas: [7, 8, 9],
    calcularSituacao: function() {
        const media = this.notas.reduce((acc, nota) => acc + nota, 0) / this.notas.length;
        return media >= 7 ? 'Aprovado' : 'Reprovado';
    }
};

// Verificando a situação do estudante
console.log(estudante.calcularSituacao());







// Criando um array de objetos "Funcionário"
const funcionarios = [
    { nome: 'Maria', salario: 2000 },
    { nome: 'Pedro', salario: 2500 },
    { nome: 'Ana', salario: 3000 }
];

// Função para calcular a soma dos salários
function calcularSomaSalarios(funcionarios) {
    return funcionarios.reduce((acc, funcionario) => acc + funcionario.salario, 0);
}

// Calculando e imprimindo a soma dos salários
const somaSalarios = calcularSomaSalarios(funcionarios);
console.log("Soma dos salários:", somaSalarios);




// Criando um array de objetos "Estudante"
const estudantes = [
    { nome: 'Alice', notas: [8, 7, 9] },
    { nome: 'Bob', notas: [6, 5, 4] },
    { nome: 'Carol', notas: [9, 10, 8] }
];

// Função para encontrar estudantes acima da média
function encontrarAcimaDaMedia(estudantes) {
    const mediaGeral = estudantes.reduce((acc, estudante) => acc + estudante.notas.reduce((acc, nota) => acc + nota, 0), 0) / estudantes.length / estudantes[0].notas.length;
    return estudantes.filter(estudante => {
        const mediaEstudante = estudante.notas.reduce((acc, nota) => acc + nota, 0) / estudante.notas.length;
        return mediaEstudante > mediaGeral;
    });
}

// Encontrando e imprimindo os estudantes acima da média
const alunosAcimaDaMedia = encontrarAcimaDaMedia(estudantes);
console.log("Alunos acima da média:", alunosAcimaDaMedia);