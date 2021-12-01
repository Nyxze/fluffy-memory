const { inherits } = require("util");

person = {
    name: "Rene",
    firstName: "Dupont"


}
person2 = {
    name: "George",
    firstName: "Duperd"

}

var greetMethod = function () {
    console.log("Hello" + this.firstName)
}
greetMethod.apply(person, null);

list = [1, 1, 1, 1, 1, 2, 1, 1, 1]
console.log(Math.max.apply({}, list));

/**
    var Constructor = function(name,firstName){
        name = this.name;
        firstName = this.firstName;
    }
*/


// Constructor Circle & Shape 
var Circle = function (radius) {
    this.radius = radius;

}
var Shape = function (color) {
    this.color = color;


}

Shape.prototype.fill = function () {
    console.log("filled shape ");
}

Shape.prototype.calcArea = function () {
    throw "Not implemented";
}

const calcAreaFunction = function(){
    return Math.PI * this.radius ** 2;
}
Circle.prototype.calcArea = calcAreaFunction;  
// Héritage

/**
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.calcArea = calcAreaFunction;
*/


//création d'objet a partir de circle 
/**
    var circle = new Circle(5);
    console.log(circle.calcArea());
    circle.fill();
*/

// Fonction d'héritage

Object.prototype.inheritsFrom = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;

}

//Crée constructor Square qui hérite de Shape
//Et qui possède une méthode calcArea

//Constructor square
var Square = function (size, color) {
    //appel au constructor
    Shape.call(this, color); // call & apply similar 
    this.size = size;

}
var square = new Square(5);
Square.inheritsFrom(Shape);
Square.prototype.calcArea = function () {
    return this.size ** 2;
}


const shapeList = [
    new Circle(2, "Blue"),
    new Square(5, "yellow"),
    new Square(6, "Purple")

]

for (let item of shapeList){
console.log(item.calcArea())
}