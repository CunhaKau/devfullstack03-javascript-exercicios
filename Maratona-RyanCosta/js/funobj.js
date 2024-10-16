function calcularMediaPrecos(produtos) {
    const somaPrecos = produtos.reduce((soma, produto) => soma + produto.preco, 0);
    const quantidadeProdutos = produtos.length;
    return somaPrecos / quantidadeProdutos;
  }
  
  // Exemplo de uso:
  const produtos = [
    { nome: 'Camiseta', preço: 20 },
    { nome: 'Calça', preço: 50 },
    { nome: 'Tênis', preço: 80 }
  ];
  
const mediaPrecos = calcularMediaPrecos(produtos);
console.log("A média dos preços é:", mediaPrecos);





function alunosAcimaDeOito(alunos) {
    return alunos.filter(aluno => aluno.nota > 8);
  }
  
  // Exemplo de uso:
  const alunos = [
    { nome: 'Alice', nota: 9 },
    { nome: 'Bob', nota: 7 },
    { nome: 'Carol', nota: 10 }
  ];
  
  const alunosAcima = alunosAcimaDeOito(alunos);
  console.log("Alunos acima de 8:", alunosAcima);







  function encontrarFuncionarioComMaiorSalario(funcionarios) {
    return funcionarios.reduce((funcionarioComMaiorSalario, funcionario) => {
      return funcionario.salario > funcionarioComMaiorSalario.salario ? funcionario : funcionarioComMaiorSalario;
    });
  }
  
  // Exemplo de uso:
  const funcionarios = [
    { nome: 'João', salario: 2000 },
    { nome: 'Maria', salario: 2500 },
    { nome: 'Pedro', salario: 1800 }
  ];
  
  const funcionarioComMaiorSalario = encontrarFuncionarioComMaiorSalario(funcionarios);
  console.log("Funcionário com maior salário:", funcionarioComMaiorSalario);
  
  




  function pessoasComMaisDeTrinta(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade > 30);
  }
  
  // Exemplo de uso:
  const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 35 },
    { nome: 'Carla', idade: 28 }
  ];
  
  const pessoasMaisVelhas = pessoasComMaisDeTrinta(pessoas);
  console.log("Pessoas com mais de 30 anos:", pessoasMaisVelhas); 