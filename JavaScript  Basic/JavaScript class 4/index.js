// console.log('Kya Haal');


// *Hoisting -> Process of moving function decleration to the top of the file. it done automatically by Js engine

//function declaration 
// function run(){
//     console.log('running');
// }

//function call or invoke
// run();

//Named function assignment
// let stand = function walk(){
//     console.log('walking');
// };

//Anonymous function assignment
// let stand2 = function(){
//     console.log('walking');
// };

// stand();

// let jumnp = stand;

// jumnp();

// stand2();

// let x = 1;
// x = 'a';

// console.log(x);

// function sum(){
//     let total = 0;
//     for(let value of arguments)
//        total = total + value;
//     return total;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,4,5,2));

// let ans = sum(1,2,3,4);
// console.log(ans);

// Rest Operator

// function sum(num,value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);

// //Default Pararmeter
// function intrest(p,r=6,y=9){
//     return p*r*y/100;
// }

// // GETTER SETTER

// // getter -> access properties
// // setter -> change or mutate properties


// // console.log(intrest(1000,undefined,undefined));

// let person = {
//     fName: 'Love',
//     lName: 'Babbar',
//     get fullName(){
//     return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };



// // console.log(person);


// //issue -> read only

// // console.log(person.fullName);
// try{
//     person.fullName = true;
// }
// catch(e){
//     alert(e);
// }

// console.log(person.fullName);


// {
//     var a = 5;
//     // console.log(a);
// }

// console.log(a);

// function walk() {
//     var a = 5;
// }

// console.log(a);

// for(var i = 0; i<10; i++){

// }

// console.log(i);

// if(true){
//     let a = 5;
// }
// console.log(a);

// function a()
// {
//     const ab =5;
// }
// const ab = 5;
// function b(){
//     const ab =5;
// }

// Reducing the array

// let total = 0;
let arr = [-1,-2,-3,-4];

// for(let value of arr){
//     total = total + value;
// }
// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log("PRINTING TOTAL SUM: ")
console.log(totalSum);




