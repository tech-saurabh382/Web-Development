console.log('chaliye shuru kartay hai');

//object create 
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

//factory function 

// function createRectangle(len, bre){
    
//     return rectangle = {
//         lenght: len,
//         breadth: bre,
    
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
//     // return rectangle;
// }

// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudent

//Constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudent 

//Constrution function --> prop/methods --> initalize/define
// function Reactangle(len,bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function() {
//         console.log('drawing');
//     }
// }

// this --> current obj ki baat

//object creation using constrution function 

// let rectangleObject = new Reactangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Reactangle1 = new Function(
// 'length','breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw = function() {
//      console.log('drawing');
// }`) ;

// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let a = {value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;
// function inc(a)
// {
//     a++;
// }

// inc(a);
// console.log(a);

// let a = {value: 10};
// function inc(a)
// {
//     a.value++;
// }

// inc(a);
// console.log(a.value);

let reactangle = {
    lenght:2,
    breadth:4
};

//for-in loop
// for(let key in reactangle){
//     //keys are reflected through key variable
//     //values are reflected through recctangle[ket]
//     console.log(key,reactangle[key]);
// }

//for-of loop
// for(let key of Object.entries(reactangle)){
//     console.log(key);
// }

// if('lenght' in reactangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

//object - clone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


//Object cloning #2
// let src = {
//      a:10,
//      b:20,
//      c:30
// };

// let src2={value:25};

// let dest = Object.assign({},src,src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// Object Cloning #3
let src ={
    a:10,
    b:20,
    c:30
};

let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);