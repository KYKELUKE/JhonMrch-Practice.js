// function sumar(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     throw new Error("Los valores deben ser números")
//   }
//   return a + b
// }

// try {
//   const resultado = sumar(parseInt("5"), 10)
//   console.log("La suma es:", resultado)
// } catch (error) {
//   console.error(error.message)
// }

//2: Escribir una función llamada calcularImpuestos que reciba dos bargumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario debe salir "0"
// Example:
 // 0



// function calcularImpuestos(edad, ingresos) {
//   if (edad >= 18 && ingresos >= 1000) {
//     return ingresos * 0.4;
//   } else {
//     return 0;
//   }
 
// }

// console.log(calcularImpuestos (18, 1000))
// console.log(calcularImpuestos (40, 10000)) // 4000
// console.log(calcularImpuestos (17, 5000)) // 0
// console.log(calcularImpuestos (30, 500))


//Escribir una funcion llamada pares  que reciba un arreglo de numeros y retorno un nuevo arreglo  con los numeros pares unicamente.
//Example:
// console.log(pares([1, 2, 3, 4, 5, 6])) // [2 ,4 ,6]
// console.log(pares([])) // []

//Escribir una funcion llamada pares  que reciba un arreglo de numeros y retorno un nuevo arreglo  con los numeros pares unicamente.
//Example:
// console.log(pares([1, 2, 3, 4, 5, 6])) // [2 ,4 ,6]
// console.log(pares([])) // []

// function pares(numeros) {
//     return numeros.filter(numero => numero % 2 === 0);
//   }
//   console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
//   console.log(pares([])); // []
  
  
  



// function bmi(peso, altura) {
//     return (peso / (altura * altura)) < 18.5
//       ? "Bajo de peso"
//       : (peso / (altura * altura)) < 25
//       ? "Normal"
//       : (peso / (altura * altura)) < 30
//       ? "Sobrepeso"
//       : "Obeso"
//   }
//   console.log(bmi(65, 1.8)) // "Normal"
//   console.log(bmi(72, 1.6)) // "Sobrepeso"
//   console.log(bmi(52, 1.75)) // "Bajo de peso"

// function likes(numero) {
//     if (numero < 1000) {
//       return numero.toString();
//     } else if (numero < 1000000) {
//       return (numero / 1000).toFixed(1) + "K";
//     } else {
//       return (numero / 1000000).toFixed(1) + "M";
//     }
//   }
//   console.log(likes(1400)); // "1K"
//   console.log(likes(34567)); // "34K"
//   console.log(likes(7456345)); // "7M"
//   console.log(likes(500)); // "500"
    