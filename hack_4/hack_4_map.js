/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let numeros = [1, 3, 5, 7];

result = result.concat(numeros.map(num => num));

//export result
module.exports = result;