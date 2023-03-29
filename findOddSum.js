// function num(number){

//     for(number%2==0){
        
//     }
// }

function getOddNumbersOfAnArray(number){
    baddata=[];

    for(let i=0; i<number.length; i++){

         index =i;
         element = number[i];
         if(element%2!=0){

            baddata = baddata + 1;

            
            
        }
        
        
    }
    return baddata;
}

const number = [12,65,58,69,70,85]
baddata=getOddNumbersOfAnArray(number);
console.log(baddata)

// function gemsToDiamond(numbers){
// let sum=0;
// for(let i=0; i<numbers.length; i++){

//     const index=i;
//     const element = numbers[index];
//     sum = sum +element;
//     console.log(sum);
// }
// return sum;
// }

// const myNumbers = [21,32,43];
// gemsToDiamond(myNumbers);

// function compare(a, b) {

//     if (a == b) {
   
//     return true;
   
//     } else {
   
//     return false;
   
//     }
   
//    }
   
//    const result = compare(15, "15");
   
//    console.log(result);

let a="hi"


let b="there"

console.log(a+b)
