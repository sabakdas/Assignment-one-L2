//Problem-----1

const filterEvenNumber =(input:number[]):number[]=>{
    return input.filter(num => num%2===0);
};

// console.log(filterEvenNumber([1,2,3,4,5,6]));


//Problem-----2

const reverseString = (something:string)=>{
    return something.split("").reverse().join("");
}

// const some:string = "typescript";
// console.log(reverseString(some));

//Problem-----3

type StringOrNumber = string|number;

const checkType =(input:StringOrNumber)=>{
    if(typeof input === "string"){
        return "String";
    }
    else{
        return "Number";
    }
};

// console.log(checkType("Hello"));
// console.log(checkType(42));


//Problem-----4



function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
};

const user ={
    id:1,
    name:"john Doe",
    age:21
}

// console.log(getProperty(user,"name"));

//Problem-----5

interface Book{
    title:string;
    author:string;
    publishedYear:number;
};

type read = Book & {isRead:boolean};

const toggleReadStatus =(input:Book):read=>{
    return {
        ...input,
        isRead:true,
    };
};

const book={
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true
}

// console.log(toggleReadStatus(book));

//Problem-----6

class Person {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }


}

class Student extends Person{
    
    grade:string;

    constructor(name:string,age:number,grade:string){
        super(name,age); 
        this.grade=grade;

    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
        
    }
};

const student = new Student("Alice",20,"A");

// console.log(student.getDetails());

