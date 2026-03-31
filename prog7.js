class student{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }
}

let s1=new student("chey",21,95)
let s2=new student("govind",23,85)
let s3=new student("dhanush",20,73)
let s4=new student("vishnu",29,55)

let students=[s1,s2,s3,s4]

let topstudents=students[0]
for(let i=0;i<students.length;i++){
    if(students[i].marks>topstudents.marks){
        topstudents=students[i]
    }

}
console.log("top student details")
console.log("name is"+topstudents.name)
console.log("age is"+topstudents.age)
console.log("marks is"+topstudents.marks)