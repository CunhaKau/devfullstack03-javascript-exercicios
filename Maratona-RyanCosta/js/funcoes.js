function dividir(numerador, denominador) {
    if (denominador === 0) {
      return "Divisão por zero não é permitida.";
    } else {
      return numerador / denominador;
    }
  }
  
  // Exemplo de uso:
  const resultadoDivisao = dividir(10, 2);
  console.log(resultadoDivisao); // Saída: 5
  
  const resultadoDivisaoPorZero = dividir(5, 0);
  console.log(resultadoDivisaoPorZero); // Saída: Divisão por zero não é permitida.





  function ordenarAlfabeticamente(lista) {
    return lista.sort();
  }
  
  // Exemplo de uso:
  const palavras = ["banana", "maçã", "laranja"];
  const palavrasOrdenadas = ordenarAlfabeticamente(palavras);
  console.log(palavrasOrdenadas); // Saída: ["banana", "laranja", "maçã"]






  function encontrarMaiorNumero(numeros) {
    return Math.max(...numeros);
  }
  
  // Exemplo de uso:
  const numeros = [3, 7, 2, 9, 5];
  const maiorNumero = encontrarMaiorNumero(numeros);
  console.log(maiorNumero); // Saída: 9





  function inverterString(texto) {
    return texto.split('').reverse().join('');
  }
  
  // Exemplo de uso:
  const texto = "Olá, mundo!";
  const textoInvertido = inverterString(texto);
  console.log(textoInvertido); // Saída: !odnum ,alÓ