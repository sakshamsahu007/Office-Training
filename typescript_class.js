//Fields        − A field is any variable declared in a class.   
//Constructors  − Responsible for allocating memory for the objects of the class.
//Functions     − Functions represent actions an object can take.
var Car = /** @class */ (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Function shows Engine :   " + this.engine);
    };
    return Car;
}());
var object = new Car("V5");
object.disp();
console.log("Reading attribute value Engine as :  " + object.engine);
