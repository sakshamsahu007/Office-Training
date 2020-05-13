var str = new String("This is string");
console.log("str.constructor is:" + str.constructor); // constructor
var name1 = new String("Hello World");
console.log(name1); //length
console.log("Length " + name1.length);
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com"; //prototype
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
var str = new String("This is string");
var str11 = "Techahead Software ";
var str22 = "Pvt. Ltd.";
var str33 = "Apples are round and apples are juicy.";
console.log("str11 : " + str11);
console.log("str22 : " + str22);
console.log("str.charAt(0) is: " + str.charAt(11));
console.log("str.charCodeAt(4) is: " + str.charCodeAt(4));
var str3 = str11.concat(str22);
console.log("str11 + str22 : " + str3);
console.log("indexOf found 'Software': " + str11.indexOf("Software"));
console.log("lastIndexOf found 'Ltd.': " + str22.lastIndexOf("Ltd."));
console.log("str33 : " + str33);
var re = /apples/gi;
console.log("Replaced string : " + str33.replace(re, "oranges"));
if (str33.search(re) == -1) {
    console.log("Str33: Does not contain Apples");
}
else {
    console.log("Str33: Contains Apples");
}
console.log("Sliced of Str11:" + str11.slice(10, -1));
console.log("Splited of Str33:" + str33.split(" "));
console.log("Sub-String of Str33 :" + str33.substr(0, 7));
console.log("Sub-String of Str11 :" + str11.substring(0, 8));
console.log("Lowercase of Str33 :" + str33.toLowerCase());
console.log("Uppercase of Str33 :" + str33.toUpperCase());
