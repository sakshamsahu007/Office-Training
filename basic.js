var message = 'basic program';
console.log(message);
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(25, 25);
console.log('Sum of the numbers is: ' + sum);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var x = new Greeting();
x.greet();
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
var num = 12;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
var n1 = 5;
while (n1 > 5) {
    console.log("Entered while");
}
do {
    console.log("Entered do…while");
} while (n1 > 5);
var a1 = 1;
while (a1 <= 10) {
    if (a1 % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + a1);
        break; //exit the loop if the first multiple is found 
    }
    a1++;
} //outputs 5 and exits the loop
var num1 = 0;
var count1 = 0;
for (num1 = 0; num1 <= 20; num1++) {
    if (num1 % 2 == 0) {
        continue;
    }
    count1++;
}
console.log(" The count of odd values between 0 and 20 is: " + count1); //outputs 10
