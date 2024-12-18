/*

In JavaScript, classes and objects are fundamental concepts in Object-Oriented Programming (OOP). 
Let's go through them in detail:

1. Class:
A class is like a blueprint or template for creating objects. It defines properties (data) and methods (functions) 
that the created objects will have. You can think of a class as a template that describes the structure and behavior 
of objects.

2. Object:
An object is an instance of a class. It is created from the class blueprint, and it holds actual data 
in the form of properties. Each object can have its own unique data, but it will share the structure and 
behavior defined in the class.

*/

/* "this" is different for different object. "this" of object1 is different than this of object2 */

class Person{
    constructor(name,age){
        this.a=name            // a is inatsnce variable
        this.b =age            // b is instance variable
    }

    greet(){
        console.log(this.a, this.b)

        console.log(`my name is ${this.a} and my age is ${this.b}`)
    }
}

let obj1 = new Person("Ven",22)
obj1.greet()

let obj2 = new Person("henil", 23)
obj2.greet()
