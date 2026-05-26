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

console.log(checkType("0"));
console.log(checkType(42));

