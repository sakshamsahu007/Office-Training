var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
var arr_names = new Array(4); //Array Object
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var names = new Array("Mary", "Tom", "Jack", "Jill"); //Array Constructor accepts comma separated values
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("Test Value : " + passed);
function isBigEnough1(element, index, array) {
    return (element >= 10);
}
var passed1 = [12, 5, 8, 130, 44].filter(isBigEnough1);
console.log("Test Value : " + passed1);
var num11 = [7, 8, 9];
num11.forEach(function (value) {
    console.log(value);
});
var sqNumbers = [1, 4, 9, 16, 25, 36];
var roots = sqNumbers.map(Math.sqrt);
console.log("roots are : " + roots);
var total = [0, 1, 2, 3, 4, 5].reduce(function (a, b) { return a + b; });
console.log("total of reduce is : " + total);
//against two values of the array (from left-to-right) as to reduce it to a single value
var total1 = [0, 1, 2, 3, 4, 5].reduceRight(function (a, b) { return a + b; });
console.log("total of reduceRight is : " + total1);
//against two values of the array (from right-to-left) as to reduce it to a single value
function isBigEnough2(element, index, array) {
    return (element >= 10);
}
var retval = [2, 5, 8, 1, 4].some(isBigEnough2);
console.log("Returned value is : " + retval);
var retval = [12, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval);
var mixArr = ["orange", "mango", "banana", "sugar", "tea"];
var removed = mixArr.splice(2, 0, "water");
console.log("After adding 1: " + mixArr);
console.log("removed is: " + removed);
removed = mixArr.splice(3, 1);
console.log("After removing 1: " + mixArr);
console.log("removed is: " + removed);
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numeric = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
var fruits = ["orange", "mango", "banana", "sugar"];
console.log("alphabets : " + alphabets);
console.log("numbers : " + numbers);
console.log("numeric : " + numeric);
console.log("fruits : " + fruits);
console.log("AlphaNumeric : " + numeric.concat(numbers));
console.log("index of 7 in numbers: " + numbers.indexOf(7));
console.log("Join : " + numbers.join("-"));
console.log("Last index of 6 in numeric: " + numeric.lastIndexOf(6));
console.log("Pop : " + numbers.pop());
console.log("New numbers: " + numbers);
console.log("Push : " + numbers.push(9));
console.log("New numbers: " + numbers);
console.log("Reversed array of numbers is : " + numbers.reverse());
console.log("Shifted value of alphabets is : " + alphabets.shift()); //removes first element and returns that element.
console.log("Un-Shifted value of alphabets is : " + alphabets.unshift("aa")); //adds element to the start and returns length.
console.log("Un-shifted alphbets array : " + alphabets);
console.log("Sliced numeric( 0, 6) : " + numeric.slice(0, 6));
console.log("fruits sort: " + fruits.sort());
//lexical order, dictionary order, alphabetical order or lexicographic(al) product
var destruct = [12, 13]; //Array Destructuring : Breaking up the structure of an entity.
var x2 = destruct[0], y2 = destruct[1];
console.log(x2);
console.log(y2);
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
var multi = [[1, 2, 3], [23, 24, 25]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
var names = ["Mary", "Tom", "Jack", "Jill"];
function display_names(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(names[i]);
    }
}
display_names(names);
function display_array() {
    return new Array("Mary-1", "Tom-1", "Jack-1", "Jill-1"); //function to return an array
}
var return_array = display_array();
for (var a in return_array) {
    console.log(return_array[a]);
}
