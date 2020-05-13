var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employe = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employe.firstName);
console.log(employe.lastName);
console.log(employe.sayHi());
var option1 = {
    program: "saksham",
    commandline: ["hello", "world"]
};
console.log(option1.commandline[0]);
console.log(option1.commandline[1]);
var option2 = {
    program: "saksham",
    commandline: "hello"
};
console.log(option2.commandline);
var option3 = {
    program: "saksham",
    commandline: function () { return "**hello world**"; }
};
var fn = option3.commandline;
console.log(fn());
var list2;
list2 = ["Vibhu", "Nitesh"];
console.log('list1[0] = ' + list2[0]);
console.log('list1[1] = ' + list2[1]);
var drummer = {};
drummer.year = 2020;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.year);
console.log("Instrument:  " + drummer.instrument);
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
