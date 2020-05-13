class shape{
    area:number

    constructor(a:number){
        this.area=a
    }
}

class circle extends shape {
    display():void{
        console.log("Area of circle : " + this.area)
    }
}

var object_1 = new circle(225)
object_1.display()



//TypeScript doesn’t support multiple inheritance.
//The following example shows how multi-level inheritance works.

class Root {
    str: string;
}

class Child extends Root { }
class Leaf extends Child { } //indirectly inherits from Root by virtue of inheritance  

var object_2 = new Leaf();
object_2.str = "hello"
console.log(object_2.str)



class PrinterClass{
    doPrint():void{
        console.log("doPrint() from parent class called")
    }
}

class XeroxPrinter extends PrinterClass{
    doPrint():void{
        super.doPrint()                                     //Class inheritance and Method Overriding
        console.log("doPrint() is printing from xerox")
    }
}

var object_3 = new XeroxPrinter()
object_3.doPrint()

//Method Overriding is a mechanism by which the child class redefines the superclass’s method.



class StaticMem {
    static num: number;

    static disp(): void {
        console.log("The value of num is " + StaticMem.num)
    }
}

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()      // invoke the static method

//Static members are referenced by the class name.



class Liverpool{ }
var objLiverpool = new Liverpool()

var team = objLiverpool instanceof Liverpool;
console.log("objLiverpool is an instance of Liverpool : " + team)




/*A class can control the visibility of its data members to members of other classes.
This capability is termed as Data Hiding or Encapsulation.
Public      - universal accessibility
Private     - members are accessible within the class that defines them, other class members cannot access it
protected   - accessible by members within the same class, also by the members of the child classes.
*/



class Encap {
    str: string = "public"
    private str2: string = "private"
}

var obj1 = new Encap()
console.log(obj1.str)     //accessible 
//console.log(obj1.str2)   //compilation Error as str2 is private




interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {           //class can also implement interface
    interest: number
    rebate: number

    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var obj2 = new AgriLoan(10, 1)
console.log("Interest is : " + obj2.interest + " Rebate is : " + obj2.rebate)











