/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

for (let i = 0; i < 5; i++) {
    if (i == 0) {
        result.push("h@ck")
        for (let j = 0; j < numberArray.length; j++) {
            if (j % 2 == 1) {
                result.push(numberArray[j]);
            } 
            else {
                result.push(numberArray[j].toString().replace("1","one").replace("3","three").replace("5","five"));
            }
        }
        result.push("h@ck")
    }
    if (i < 5) {
        result.push(stringArray[i].replace("foo","f00").replace("bar","Bar").replace("baz","b@z").replace("x","X").replace("echo","3ch0"));
    }
}
result.push("h@ck")


console.log(result)
//export result
module.exports = result;