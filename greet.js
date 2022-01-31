//"impure" because it doesn't always have the same result
//function greet() {
// console.log('Hello world!');
//}
//"pure" function, no side effects = should always output the same

export function greet(name) {
  return 'Hello ' + name + '!';
}
