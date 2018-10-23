var chalk = require('chalk');

function Dog(name) {
  this.name = name;
  this.stomach = [];
}

Dog.prototype.eat = function() {
  console.log('gau gau');
}

Dog.prototype.sayHi = function() {
  console.log('Hi I\'m dog ' + chalk.green(this.name));
}
console.log('hello');
module.exports = Dog;