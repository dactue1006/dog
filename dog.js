function Dog(name) {
  this.name = name;
}

Dog.prototype.eat = function() {
  console.log('gau gau');
}

console.log('hello');