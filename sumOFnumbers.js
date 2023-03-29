// let sum=0;
// for(let i=1; i<=7;i++){
//     sum=sum+i;

//     console.log(sum);
// }

// var num1 =5;
// var num2 = 11.11;
// const  sum=num1+num2;
// console.log(sum.toFixed(5));

// const number = -78; 
// const answer = Math.abs(number); 
// console.log(answer);



// function add(a, b){
//     return a + b;
    
//   }
//   console.log(add("adam" + "eve"))

// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i; 
// }
// console.log(sum);

// let numbers=[10,12,89,56,-83,8,90,-8]
// 	let pos_count=0;
//     let neg_count=0;
    
// 	for(let i=0;i<numbers.length;i++)
// 	{
        
// 	while (numbers[i]<0){
//         let i = "Bad Data";
//     }
//     while(numbers[i>=0]){

//         let i= "Good Data"
//     }
	
// 	}
    
// 	console.log(`The positive numbers in an array is ${pos_count}`)
// 	console.log(`The negative numbers in an array is ${neg_count}`)




// let numbers = [ 2, -5, -7, -13 ];
// let badData = 0;

// for(let i=0; i<numbers.length; i++){

//     const element = numbers[i];
//     if(element <= 0){
//         badData = badData + 1;
       

        

//     }
    
    
// }

// console.log(badData);







// function findingBadData(){

//     for(let i=0; i<numbers.length; i++){

//         const element = numbers[i];
//         if(element <= 0){
//             badData = badData + 1;
           
    
            
    
//         }


// }


    
    
// }

// console.log(badData);

function findingBadData(array){


    
    let badData =0;
    for (let i =0; i < array.length; i++){
        if(array[i] < 0){
            badData = badData+1;

        }
        
         
    }
    return badData;
    
}


let array = [ 2, -5, -7, -13 ];
let totalBadData = findingBadData(array);
console.log(totalBadData)