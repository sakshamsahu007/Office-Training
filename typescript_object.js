//An object is an instance which contains set of key value pairs.
//Objects in Typescript must be an instance of a particular type.
var actor = {
    firstname: "Tom",
    lastname: "Hanks",
    sayHello: function () { } //Type template 
};
actor.sayHello = function () {
    console.log("hello " + actor.firstname);
};
var invokeActor = function (invoke) {
    console.log("firstname : " + invoke.firstname);
    console.log("lastname : " + invoke.lastname);
};
var cricketer = function (strike) {
    console.log("firstname : " + strike.firstname);
    console.log("lastname : " + strike.lastname);
};
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 }); //Duck-typing
cricketer({ firstname: "Sachin", lastname: "Tendulkar" }); //create and pass an anonymous object on the fly
invokeActor(actor); //Objects can also be passed as parameters to function
actor.sayHello();
//console.log(actor.firstname)
//console.log(actor.lastname)
