//function defined 
function greet():string { //the function returns a string 
   return "Hello World" 
} 



function caller() { 
   var msg = greet() //function greet() invoked 
   console.log(msg) 
} 

//invoke function 
caller()



function test_param(n1: number, s1: string) {
    console.log(n1)
    console.log(s1)
}
test_param(123, "this is a string") //POSITIONAL parameter

function disp_details(id: number, name: string, mail_id?: string) {
    console.log("ID:", id);
    console.log("Name:", name);

    if (mail_id != undefined)
        console.log("Email Id:", mail_id);
}
//Parameter can be marked OPTIONAL by appending a question mark to its name.
//The OPTIONAL parameter should be set as the last argument in a function.
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");



function addNumbers(...nums: number[]) { //REST parameter
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum)
}
//Any nonrest parameter should come before the rest parameter.
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)



function calculate_discount(price: number, rate: number = 0.50) { // DEFAULT parameter
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000)
calculate_discount(1000, 0.30)

//A parameter cannot be declared OPTIONAL and DEFAULT at the same time.



var msg = function () { //ANNONYMOUS function
    return "hello world";
}
console.log(msg())


/*
Functions that are not bound to an identifier (function name) are called as anonymous functions.
They are dynamically declared at runtime. They can accept inputs and return outputs.
It is usually not accessible after its initial creation.
*/


var res = function (a: number, b: number) { //ANNONYMOUS function with parameters
    return a * b;
};
console.log(res(12, 2)) 


//Function declarations are parsed before their execution. 
//Function expressions are parsed only when the script engine encounters it during execution.


var myFunction = new Function("a", "b", "return a * b"); // Function Constructor
var x1 = myFunction(4, 3);
console.log(x1);



function factorial_num(number) { //RECURSION
    if (number <= 0) {         // termination case
        return 1;
    } else {
        return (number * factorial_num(number - 1));     // function invokes itself
    }
};
console.log(factorial_num(6));      // outputs 720 



(function () { //ANNONYMOUS RECURSION FUNCTION
    var x = "Hello!!";
    console.log(x)
})()      // the function invokes itself using a pair of parentheses ()



var foo = (x: number) => 10 + x //Lambda Expression --> a single line of code
console.log(foo(100))      //outputs 110 



var fooo = (x: number) => { //Lambda Statement
    x = 10 + x
    console.log(x)
}
fooo(100)



var func = (x) => {
    if (typeof x == "number") {                     //Parameter type Inference
        console.log(x + " is numeric")              //It is not mandatory to specify the data type of a parameter.
    } else if (typeof x == "string") {
        console.log(x + " is a string")
    }
}
func(12)
func("Tom")



var display = x => {
    console.log("The function got " + x)            //Optional parentheses for a single parameter.
}
display(12)



var disp = () => {
    console.log("Function invoked");     //Optional braces for a single statement, Empty parentheses for no parameter.
}
disp();



function disp1(s11: string): void;
function disp1(n11: number, s11: string): void;     //Function Overloads

function disp1(u: any, v?: any): void {
    console.log(u);
    console.log(v);
}
disp1("abc")
disp1(1, "xyz");