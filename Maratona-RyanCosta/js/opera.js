function celsiusParaFahrenheit(celsius) {
    // Fórmula: Fahrenheit = (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
  const fahrenheit = celsiusParaFahrenheit(celsius);
  
  alert(celsius + "°C equivalem a " + fahrenheit + "°F");


  


  
  function calcularAreaTriangulo(base, altura) {
    // Fórmula: Área = (base * altura) / 2
    const area = (base * altura) / 2;
    return area;
  }
  
  const base = parseFloat(prompt("Digite a base do triângulo:"));
  const altura = parseFloat(prompt("Digite a altura do triângulo:"));
  const area   
   = calcularAreaTriangulo(base, altura);
  
  alert("A área do triângulo é: " + area);






// Pedimos ao usuário para digitar um número
const numero = parseFloat(prompt("Digite um número:"));

// Calculamos o quadrado e o cubo
const quadrado = numero * numero;
const cubo = numero * numero * numero;

// Exibimos o resultado
alert("O quadrado de " + numero + " é " + quadrado + ".");
alert("O cubo de " + numero + " é " + cubo + ".");






  function calcularPotencia(base, expoente) {
    // Usando o operador de exponenciação (**):
    const potencia = base ** expoente;
    return potencia;
  }
  
  const base1= parseFloat(prompt("Digite a base:"));
  const expoente = parseFloat(prompt("Digite o expoente:"));
  const resultado = calcularPotencia(base1, expoente);
  
  alert(base + " elevado a " + expoente + " é igual a " + resultado);
  