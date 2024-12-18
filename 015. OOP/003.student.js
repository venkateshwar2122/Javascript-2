/*
Question:
Create a class std (representing a student) in JavaScript to store the student's information and calculate their total marks, percentage, and display the results.

The class should have the following features:

Properties:

sid (Student ID)
name (Student's Name)
dept (Department)
m1, m2, m3 (Marks in three subjects)
Methods:

gettotal(): This method should calculate and return the total marks of the student by adding m1, m2, and m3.
getpercentage(): This method should calculate the percentage based on the total marks. It should return the percentage to exactly two decimal places.
getresult(): This method should display all the information about the student, including their ID, name, department, marks, total, and percentage.
Implementation:

Create three instances of the std class with different values for each student.
Display the results for each student using the getresult() method.


*/
class std{
    constructor(sid,name,dept,m1,m2,m3){
        this.sid = sid
        this.name = name
        this.dept = dept
        this.m1 = m1
        this.m2 = m2
        this.m3 = m3
    }

    gettotal(){
        return (this.m1 + this.m2 + this.m3)
    }

    getpercentage(){

        return(((this.gettotal()/300)*100).toFixed(2))         //tofixed() is used for getting percentage in exactly 2 decimal places

    }

    getresult(){
        console.log(this.sid,this.name,this.dept,this.m1,this.m2,this.m3,this.gettotal(),this.getpercentage())

        
    }
}

let std1 = new std(101, "kumar", "me",59,68,92)
let std2 = new std(102, "roshan", "cse",80,75,91)
let std3 = new std(103, "tamu", "ise",89,76,69)

std1.getresult()
std2.getresult()
std3.getresult()
