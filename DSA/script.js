// let year = Number(   ("Enter the year ==>"));
// if (year%4==0 || year%400==0) {
//     console.log(year,"is definately a leap year");

// }
// else{
//     console.log(year,"is not a leap year");

// }

// let amnt=Number(prompt("Enter the principal amount"));
// let dscnt;
// if (amnt>=0 && amnt <=5000) {
//     console.log("Discount",amnt);

// }
// else if (amnt>=5001 && amnt <=7000) {
//     console.log("Discount",amnt-((5/100)*amnt));
// }
// else if (amnt>=7001 && amnt <=9000) {
//     console.log("Discount",amnt-((10/100)*amnt));
// }
// else if (amnt>=9000) {
//     console.log("Discount",amnt-((20/100)*amnt));
// }
// else{
//     console.log("invalid amount");

// }
// let n = Number(prompt("Enter the value of n ?"));
// if (isNaN(n)) {
//     console.log("Invalid Input");

// }
// else {

//     for (let i = 0; i < n; i++) {
//         console.log("Hello");

//     }
// }
// let x = 1
// function fac(n) {
//     n = n * fac(n-1);
//     return n ;
// }
// fac(3);
// // console.log(n);
// let n = Number(prompt("Whats n ?"));
// let sum = 0 ;

// while (n>0) {
//     let Remainder = n % 10;
//     sum = sum + Remainder;
//     n = Math.floor(n/10);
    
// }
// console.log(sum);
// let n =6;
// for (let i = 1; i <= n; i++) {
//     // console.log(i);
    
//     for (let j = 1; j < i; j++) {
//         process.stdout.write(j+" ");
//         // console.log(j);
        
        
//     }

//     console.log();  
    
// }

// This is a way to input value from terminal
// const prompt = require("prompt-sync")();
// let n = prompt();
// console.log(n);


// let n =6;
// for (let i = 1; i <= n; i++) {
//     // console.log(i);
//     // 
//     for (let j = 1; j < n-i; j++) {
//         process.stdout.write("* ");
//         // console.log(j);
//         // 
//         // 
//     }
// // 
//     console.log();  
//     // 
// }
// for (let i = 0; i <= 60000; i++) {
//     process.stdout.write(String.fromCharCode(i)+" ");
// }tot



// *       * 
//  *     *  
//   *   *   
//    * *    
//     * 


// * * * * *
// * * * *
// * * *
// * *
// *

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

//        *   *
//         * *
//          * 
//         * *
//        *   *



// let arr = new Array(0);
// arr[2]=4;
// arr[0]=0;
// console.log(arr);

const prompt = require("prompt-sync")();
let arr_length = prompt("enter array length : ");
let arr = new Array(arr_length);
for (let i = 0; i < arr_length; i++) {
    arr[i] = prompt("Enter element number "+ i +" : ");
    
    
}
console.log(arr);

let max = arr[0];
for (let i = 1; i < arr_length; i++) {
    if (a[i]>max) {
        max= arr[i];
    }
    else{
        max = arr[i-1]
    }
    
}
console.log(max);

