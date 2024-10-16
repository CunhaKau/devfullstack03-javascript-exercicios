for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}




for (let i = 1; i <= 50; i++) {
    console.log(i);
    if (i % 5 === 0) {
        console.log("É múltiplo de 5!");
    }
}



const numero = parseInt(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= numero; i++) {
    soma += i;
}

console.log("A soma dos números de 1 até " + numero + " é: " + soma);