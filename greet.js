//"impure" because it doesn't always have the same result
//function greet() {
// console.log('Hello world!');
//}
//"pure" function, no side effects = should always output the same

export function greet(name = 'stranger') {
  //default parameter!
  if (name === 'Jerry' || name === 'Mareike' || name === 'Paul') {
    return 'Hello coach!';
  }
  return 'Hello ' + name + '!';
}
