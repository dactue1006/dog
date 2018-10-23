var chalk = require('chalk');
var Cat = require('./cat');

var cat = new Cat('tom');

function Dog(name) {
  this.name = name;
  this.stomach = [];
}

Dog.prototype.eat = function(cat) {
  this.stomach.add(cat);
  console.log('gau gau');
}

Dog.prototype.sayHi = function() {
  console.log('Hi I\'m dog ' + chalk.green(this.name));
}
console.log('hello');
module.exports = Dog;