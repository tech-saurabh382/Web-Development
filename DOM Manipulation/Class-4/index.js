// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

// setTimeout(function(){
//     console.log('third');
// },3000);
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');


// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise1');
//     },5000);
//     // resolve(12345678);
//     reject(new Error('Bhaisahab Error aaye hai'))
// });

// meraPromise1.then((value) => {console.log(value)}, (error) => {console.log("Recieved an Error")});

// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },3000);
//     // resolve(2233);
//     // reject(new Error('Bhaisahab Error aaye hai'))
// });

// console.log('phela')

// let waada1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waada1.then(() => {
//     let Waada2 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('setimeout2 started');
//         },3000);
//         resolve("Waada 2 resolved");
//     })
//     return Waada2;
// });

// output.then((value) => console.log(value));

// async function abcd(){
//     return 'Kya hua tera';
// }

// async function utility(){

//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Delhi me bhot garmi hai');
//         },1000);
//     });
    
//     let hydMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hyderabad is cool');
//         },5000);
//     });

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM,hM];


// }
let obj = {
    heading:"Head"
};
async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}
