// function bringSingara(money , money2){

//     console.log('mama singara den' , money2 , 'takar');
//     console.log(money);
// }
// var taka = 110;

// bringSingara(taka, 10)

// function sum(a,b,c,d,e){

//     console.log(a,b,c,d,e);
//     var sum = a+b+c+d+e;
//     console.log(sum);
// }

// sum(1,2,3,4,5);


function bringSingara(money){

    var singaraPrice = 10;
    var quantity=money/singaraPrice;
    return quantity;


}
var singaras = bringSingara(100);
console.log('eating singaras' , singaras)