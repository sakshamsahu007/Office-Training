//Fields        − A field is any variable declared in a class.   
//Constructors  − Responsible for allocating memory for the objects of the class.
//Functions     − Functions represent actions an object can take.



class Car {
    //field 
    engine: string;

    //constructor 
    constructor(engine: string) {
        this.engine = engine
    }

    //function 
    disp(): void {
        console.log("Function shows Engine : " + this.engine)
    }
    
}

var object = new Car("V5")
object.disp()
console.log("Reading attribute value Engine as : " + object.engine)  