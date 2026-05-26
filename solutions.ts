//Problem-----1

const filterEvenNumber =(input:number[]):number[]=>{
    return input.filter(num => num%2===0);
};


//Problem-----2

const reverseString = (something:string)=>{
    return something.split("").reverse().join("");
}



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


//Problem-----4


function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
};


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



//Problem-----7

function getIntersection<T>(array1:T[],array2:T[]):T[]{
    return array1.filter(element => array2.includes(element));
};



