var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shape = /** @class */ (function () {
    function shape(a) {
        this.area = a;
    }
    return shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    circle.prototype.display = function () {
        console.log("Area of circle : " + this.area);
    };
    return circle;
}(shape));
var object_1 = new circle(225);
object_1.display();
//TypeScript doesn’t support multiple inheritance.
//The following example shows how multi-level inheritance works.
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); //indirectly inherits from Root by virtue of inheritance  
var object_2 = new Leaf();
object_2.str = "hello";
console.log(object_2.str);
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from parent class called");
    };
    return PrinterClass;
}());
var XeroxPrinter = /** @class */ (function (_super) {
    __extends(XeroxPrinter, _super);
    function XeroxPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XeroxPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); //Class inheritance and Method Overriding
        console.log("doPrint() is printing from xerox");
    };
    return XeroxPrinter;
}(PrinterClass));
var object_3 = new XeroxPrinter();
object_3.doPrint();
//Method Overriding is a mechanism by which the child class redefines the superclass’s method.
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // initialize the static variable 
StaticMem.disp(); // invoke the static method
//Static members are referenced by the class name.
var Liverpool = /** @class */ (function () {
    function Liverpool() {
    }
    return Liverpool;
}());
var objLiverpool = new Liverpool();
var team = objLiverpool instanceof Liverpool;
console.log("objLiverpool is an instance of Liverpool : " + team);
/*A class can control the visibility of its data members to members of other classes.
This capability is termed as Data Hiding or Encapsulation.
Public      - universal accessibility
Private     - members are accessible within the class that defines them, other class members cannot access it
protected   - accessible by members within the same class, also by the members of the child classes.
*/
var Encap = /** @class */ (function () {
    function Encap() {
        this.str = "public";
        this.str2 = "private";
    }
    return Encap;
}());
var obj1 = new Encap();
console.log(obj1.str); //accessible 
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj2 = new AgriLoan(10, 1);
console.log("Interest is : " + obj2.interest + " Rebate is : " + obj2.rebate);
