/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let numeros = [7, 5, 3, 1];

result = result.concat(numeros.map(num => num));

//export result
module.exports = result;