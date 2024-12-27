let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20];
let numbImpar = [];
let numbPar = [];
let i = 0;


while (i < numero.length) {
    if(numero[i] % 2 === 0) {
        numbPar.push(numero[i]);
    }else {
        numbImpar.push(numero[i]);
    };

    i += 1;
}

console.log("Numero impar ", numbImpar)
console.log("Numero par ", numbPar)

// i = 0;

// while(i < numbImpar.length) {
//     console.log("Numeros Impares ", numbImpar[i], numbImpar[++i], numbImpar[++i] );
//     i += 1;
// }

// i = 0;

// while(i < numbPar.length) {

//     if (numbPar[i] === undefined) {
//         break;
//     }else {
//         console.log("Numeros pares ", numbPar[i]);
//     }

//     i += 1;
// }