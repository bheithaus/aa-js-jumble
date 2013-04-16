var _ = require('underscore');

function Cat(name, owner) {
	this.name = name;
	this.owner = owner;
}

Cat.prototype.cute_statement = function () {
	return this.owner + " loves " + this.name;
}

c = new Cat('prestige', 'April');
meow = new Cat('meow', 'Brian');
cat = new Cat('umbridge', 'Ned');

Cat.prototype.meow = function () {
	return "meow meow meow";
}

Cat.prototype.cute_statement = function () {
	return "everyone loves " + this.name;
}

cat.meow = function () {
	return "hella meow!!";
}


console.log(c.cute_statement(), meow.cute_statement(), cat.cute_statement());


console.log(cat.meow(), c.meow());



