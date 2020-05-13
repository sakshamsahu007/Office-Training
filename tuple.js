//Store a collection of values of varied types (heterogeneous collection of values).
var mytuple_1 = [10, "Hello"]; //create a  tuple 
console.log(mytuple_1[0]);
console.log(mytuple_1[1]);
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push : " + mytuple.length); // returns the tuple size 
mytuple.push(12); // append value to the tuple 
console.log("Items after push : " + mytuple.length);
console.log("Pushed mytuple : " + mytuple);
console.log("Items before pop : " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple : "); // removes and returns the last item
console.log("Items after pop : " + mytuple.length);
console.log("Popped mytuple : " + mytuple);
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
console.log("mytuple : " + mytuple);
