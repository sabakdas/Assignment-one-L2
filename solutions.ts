//Problem-----1

const filterEvenNumber =(input:number[]):number[]=>{
    return input.filter(num => num%2===0);
};

console.log(filterEvenNumber([1,2,3,4,5,6]));
