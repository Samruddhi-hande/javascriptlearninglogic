//function to write
let a = 20;
let b = 30;
function add(a, b) {
    return console.log(a + b);
}
add(a, b);
//function expression
let add1 = function (a, b) {
    return a + b;
}
console.log(add1(a, b));
console.log(add(a, b));//undefined 
// In JavaScript, every function returns a value.If you don't explicitly specify 
// what to return, it returns undefined.
// The built -in console.log() function is designed to print messages to the console,
//  but it does not return a value itself.Therefore, its return value is always undefined.
