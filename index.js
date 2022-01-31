import { greet } from './greet.js';

console.log(greet('Jane'));

// Funktion markieren, auf Glühbirne klicken -> move to new file! :)
//"impure" because it doesn't always have the same result
//function greet() {
// console.log('Hello world!');
//}
//"pure" function, no side effects = should always output the same
//function greet(name) {
//  return 'Hello ' + name + '!';
//}
