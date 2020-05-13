console.log("TypeScript Number Properties: ");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month); //NaN
}
else {
    console.log("Value Accepted..");
}
function employee(id, name) {
    this.id = id;
    this.name = name; //Prototype
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
//toExponential() 
var num1 = 1225.30;
var val = num1.toExponential();
console.log(val);
//toFixed()
var num2 = 177.234;
console.log("num3.toFixed() is " + num2.toFixed());
console.log("num3.toFixed(2) is " + num2.toFixed(2));
console.log("num3.toFixed(6) is " + num2.toFixed(6));
//toLocaleString()
var num3 = new Number(177.1234);
console.log(num3.toLocaleString());
//toPrecision()
var num4 = new Number(7.123456);
console.log(num4.toPrecision());
console.log(num4.toPrecision(1));
console.log(num4.toPrecision(2));
//toString()
var num5 = new Number(10);
console.log(num5.toString());
console.log(num5.toString(2));
console.log(num5.toString(8));
//valueOf()
var num6 = new Number(10);
console.log(num6.valueOf());
