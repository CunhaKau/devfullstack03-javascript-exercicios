const numero = parseInt(prompt("Digite um número:"));

if (numero >= 1 && numero <= 100) {
  console.log("O número está entre 1 e 100.");
} else {
  console.log("O número está fora do intervalo de 1 a 100.");
}





function classificarIdade(idade) {
    if (idade < 13) {
      return "criança";
    } else if (idade < 18) {
      return "adolescente";
    } else {
      return "adulto";
    }
  }
  
  const idade = parseInt(prompt("Digite sua idade:"));
  const classificacao = classificarIdade(idade);
  console.log("Você é " + classificacao + ".");




  const mes = parseInt(prompt("Digite o número do mês (1 a 12):"));

switch (mes) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("O mês tem 31 dias.");
    break;
  case 4: case 6: case 9: case 11:
    console.log("O mês tem 30 dias.");
    break;
  case 2:
    console.log("O mês tem 28 ou 29 dias (ano bissexto).");
    break;
  default:
    console.log("Mês inválido.");
}







const numero1 = parseFloat(prompt("Digite um número:"));

if (numero1 > 0) {
  console.log("O número é positivo.");
} else if (numero1 < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}