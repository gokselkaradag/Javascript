// Var - Let - Const Değişkenleri

/*

var/let/const degıskenİsmi = degiskenDegeri;

let sayi = 10;

*/

// var : function scope -- ram bellekte çok fazla er kaplar.
// let/const : block scope özelliğine sahiptir.

/*
function hello(){
    var hello = "Herkese Selam";

    if(true){
        var b = "selam";
    }

    console.log(b);
    console.log(hello);
}

hello();
*/


// LET & CONST arasındaki fark 

// const (constant) :  sabit , değişmez

// let : değişebilir

// const user = {
//     username :"göksel",
//     password : "123"
// }

// user();

// console.log(user);