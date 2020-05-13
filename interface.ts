interface IPerson {                         //Declaring Interfaces
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employe: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ")
console.log(employe.firstName);
console.log(employe.lastName);
console.log(employe.sayHi())


//Interfaces are not to be converted to JavaScript. It’s just part of TypeScript


interface Runoptions {
    program:string;
    commandline:string[]|string|(()=>string);           //Union Type and Interface
}

var option1: Runoptions = {
    program: "saksham",
    commandline: ["hello", "world"]
}
console.log(option1.commandline[0])
console.log(option1.commandline[1])


var option2: Runoptions = {
    program: "saksham",
    commandline: "hello"
}
console.log(option2.commandline)


var option3: Runoptions = {
    program: "saksham",
    commandline: ()=>{return "**hello world**";}
}
var fn: any = option3.commandline;
console.log(fn());




interface age {
    [index: string]: number       //Index can be of type string or type number.
}

//var list1:age;
//list1["Vibhu"] = 25;
//list1["Nitesh"] = 23;
//console.log(list1)
//console.log('list1["Vibhu"] = ' + list1["Vibhu"] );
//console.log('list1["Nitesh"] = ' + list1["Nitesh"]);


interface namelist {
    [index:number]:string
}

var list2:namelist;
list2=["Vibhu","Nitesh"];
console.log('list1[0] = ' + list2[0]);
console.log('list1[1] = ' + list2[1]);




interface People {
    year: number
}

interface Musician extends People {         //Multiple Interface Inheritance
    instrument: string
}

var drummer = <Musician>{};
drummer.year = 2020
drummer.instrument = "Drums"
console.log("Age:  " + drummer.year) 
console.log("Instrument:  " + drummer.instrument)




interface IParent1 {
    v1: number
}

interface IParent2 {
    v2: number
}

interface Child extends IParent1, IParent2 { }
var Iobj: Child = { v1: 12, v2: 23 }
console.log("value 1: " + this.v1 + " value 2: " + this.v2)