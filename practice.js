    
// Problem No:1
/* Function Explanation: This function put a positive number then multiplicate 3 then add 10 then divide by 2 then substract -5 with the number*/

function mindGame(n){

    if (typeof n !== "number") {
        return "Input is not a number.";
    }

    if(n >=0){

        n=n*3;
        n=n+10;
        n=n/2;
        n=n-5;
        return n;
    }
    
    

}





// Problem No:2
/* Function Explanation: This function calculate the total character of a string*/

function evenOdd(string) {
    if(typeof string !== "string"){
        return "Input is not a string";
    }

    if (string.length % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }





// Problem No:3
/* Function Explanation: This function about Less or Greater than seven*/

  function isLGSeven(num) {

    if(typeof num !== "number"){
        return "Input is not a string";
    }
    let differenceInt = (num - 7);
    doubleInt= num*2;

    if(differenceInt <= 6 ){
        return differenceInt;
    }
    else{
        
        return doubleInt;
    }
   
  }

  



// Problem No:4
/* Function Explanation: This function about Finding negeative value from array*/

  function findingBadData(array){

    if (typeof array !== "object" || !Array.isArray(array)) {
        return "input is not an array.";
    }

    let badData =0;
    for (let i =0; i < array.length; i++){
        if(array[i] < 0){
            badData = badData+1;

        }
    }
    return badData;
}
let totalBadData = findingBadData(array);





// Problem No:5
/* Function Explanation: This function about Convert your gems into diamond*/
function gemsToDiamond(firstFriendQuantity, secondFriendGemQuantity, thirdFriendQuantity){

    if (typeof firstFriendQuantity !== "number" || typeof secondFriendGemQuantity !== "number" || typeof thirdFriendQuantity !== "number") {
        return "Input is not a number.";
    }

        const firstFriendGemPower = 21;
        const secondFriendGemPower = 32;
        const thirdFriendGemPower = 43;
    
        const firstFriendDiamond = firstFriendQuantity * firstFriendGemPower;
    
        const secondFriendDiamond = secondFriendGemQuantity * secondFriendGemPower;
    
        const thirdFriendDiamond = thirdFriendQuantity * thirdFriendGemPower;
        let totalDiamond =firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
        
        if(totalDiamond < 1000*2){
    
            return totalDiamond;
        }
        else{
    
            totalDiamond= totalDiamond - 2000;
            return totalDiamond;
        }
        
       }
    
       let totalDiamond = gemsToDiamond(20,200,50);
       
    

