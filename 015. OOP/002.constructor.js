/* constructors are used to initialise data members at the time of object creation. */

/* note that constructor for a particular object is only called once. for example,
for object1 constructor will only be called once, for object2 also constructor will only be called once */

/* when we do not provide a constructor , system will provide a default constructor */

/* syntax:

constructor(parameters){
}

*/

/* when we provide a constructor the system doesn't provide any desualt constructor */

/* You cannot declare variables with "let" directly inside a class body. If you want instance variables, you need to declare them using "this" inside the constructor or use public/private field syntax.
*/

/* always instance variable(data menbers) refers with "this" keyword */

/* "this" is different for different object. "this" of object1 is different than "this" of object2 */

/* this always refers to currently refering object */

class A{
    constructor(x,y){
        this.a = x              // a is instance variable
        this.b = y              // b is instance variable
    }

    disp(){
        console.log(this.a , this.b)
    }

    getA(){
        return this.a
    }

    getB(){
        return this.b
    }

    setA(x){
        this.a = x
    }

    setB(y){
        this.b = y

    }
}


let obj1 = new A(5,8)
let obj2 = new A(12,16)
obj1.disp()          // 5  8
obj2.disp()          // 12 16
obj1.setA(23)         
obj1.disp()          // 23 8
console.log(obj1.getB())  // 8
