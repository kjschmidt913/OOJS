var Shape = function(name){
	this.name = name;
}

Shape.prototype.getType = function(shapeType){
	this.shapeType = shapeType;
	console.log(shapeType);
}

var Triangle = function (a, b, c){
	Shape.call(this);
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);


Triangle.prototype.getPerimeter = function(){
	console.log(this.a + this.b + this.c);
	return (this.a + this.b + this.c);
}

var KJ = new Triangle(3, 4, 5);
KJ.getPerimeter();
KJ.getType("Triangle");