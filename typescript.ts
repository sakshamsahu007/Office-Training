var value:string|number 
value = 12 
console.log("numeric value of value : "+value) 
value = "string" 
console.log("string value of value : "+value)


function display_union(name: string | string[]) {           //Union Type and function parameter
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;

        for (i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}
display_union("mark")
console.log("Printing names array....")
display_union(["Mark", "Tom", "Mary", "John"])



var arr: number[] | string[];               //can be applied to arrays, properties and interfaces
var i: number;
arr = [1, 2, 4]
console.log("**numeric array**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr = ["Mumbai", "Pune", "Delhi"]
console.log("**string array**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
} 