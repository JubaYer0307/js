// function IsLeapYear(year){

//     const remainder = year %  4;
//     if(remainder==0){

//         // console.log("Your year is leap year", year)
//         return true;
//     }
//     else{
        
//         // console.log("Your year is not a leap year")
//         return false; 
//        }
// }

// const isMyYearleap = IsLeapYear(2022);
// console.log(isMyYearleap);


// function evenOdd(string) {
//     if (string.length % 2 == 0) {
//       return "even";
      
//     } else {
//       return "odd";
//     }

    
    
    
//   }
  
//   console.log(evenOdd('rajua'));

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
    
       let totalDiamond = gemsToDiamond('a',200,50);
       console.log(totalDiamond);