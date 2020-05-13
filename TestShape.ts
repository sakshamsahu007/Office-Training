/// <reference path = "Ishape.ts" />   
         /// <reference path = "Circle.ts" /> 
         /// <reference path = "Triangle.ts" />  
         function drawAllShapes(shape:Drawing.IShape) { 
            shape.draw(); 
         } 
         drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());


//tsc--out app.js TestShape.ts
//node app.js





/*

NESTED NAMESPACE

You can access members of nested namespace by using the dot (.) operator

FileName : Invoice.ts
namespace tutorialPoint {
   export namespace invoiceApp {
      export class Invoice {
         public calculateDiscount(price: number) {
            return price * .40;
         }
      }
   }
}
FileName: InvoiceTest.ts

/// <reference path = "Invoice.ts" />
var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));



tsc --out app.js InvoiceTest.ts
node app.js
*/