console.log("Hello JavaScript!!");
// console.log(199);
// console.log(10+20);

// let name = "Bangla Coding School";

// console.log(name);

// let x=10;
// console.log(x);

// x=20;
// console.log(x);

// const country = "india";

// console.log(country);

// country="Japan";
// console.log(country);

//valid variables names
// let userName;
// let age2;
// let _price;
// let Price_rs;

//invalid
//  let 2age;
//  let price rs;

// let name2 = "Kamal"; // string
// let age = 21; //number
// let isStudent = true; //boolean
// let price = 99.89; //float

// let user;

// console.log(user);

// let setUser = null;

// console.log(setUser);

// // Name;
// // age;
// // course;
// // marks;

// const student = {
//   name: "kamal",
//   age: 21,
//   course: "BCA",
//   marks: 69,
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.marks);

// //array
// const colors=["red","blue","green"];

// console.log(colors[0]);

// console.log(typeof(price));

// 1. Arithmetic Operators

// let a = 20;
// let b = 2;

// let c = a+b;
// console.log(c);

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a / b); //
// console.log(a % b);
// console.log(a ** b);

// 2. Assignment Operators

let x = 10;
// console.log(x);

// x = x+5;

// x += 10;
// x -= 10;
// x *= 10;
// console.log(x);

// 3. Comparison Operators

// true or false

let y = 10;
let z = 10;

// console.log( y>z);
// console.log( y<z);
// console.log( y>=z);
// console.log( y==z);
// console.log( y!=z);

// == vs ===

let num1 = 10;
let num2 = "10";

// console.log(num1==num2);
// console.log(num1===num2); // value + typeof value

// != ---- only check value
// !==  ---check value +type

// 4. Logical Operators

// && - AND  Both condition must be true

// true - true = true
// true - false = false
// false - false = false

// || - OR One condition true means result true

// true - true = true
// true - false = true
// false - false = false

// ! - NOT

// let age = 10;
let eligible = false;

// console.log(age > 18 && eligible);

// console.log(age > 18 || eligible);

// console.log(!eligible);

// 5. Increment & Decrement
//  ++
//  --

let count = 5;

// count++;
// count = count+1;
// console.log(count); //6

// count--;
// console.log(count); //5

// 6. Ternary Operator

// condition ? valueIfTrue : valueifFalse;

// let age =2;

// let result = age>=18 ?"can vote" : "cannot vote";

// console.log(result);

// let marks = 30;

// let rs = marks >=40 ? "Pass" : "Fail";

// console.log(rs);

// Js Input Output

// let name = "BCS";

// alert("Welcome to JavaScript " + name);

// let name = prompt("Enter your name");

// console.log(name);

// let result = confirm("Are you 18+?");

// console.log(result);

// let name = prompt("Enter your name");

// alert("Welcome " + name);

// let a = Number(prompt("Enter first no."));
// let b = Number(prompt("Enter second no."));

// console.log(a+b);

// let a = parseInt(prompt("Enter first no."));
// let b = parseFloat(prompt("Enter second no."));

// console.log(a+b);

// syntax
// if(condition){
//   //code to be execute
// }

// let age = 20;

// if (age >= 18) {
//   //code to be execute
//   console.log("Adult");
// }

// if(age>=18){
//       console.log("Adult");
// }else{
//      console.log("Child");
// }

// let marks = 9;

// if (marks >= 90) {
//   console.log("A+");
// } else if (marks >= 80) {
//   console.log("A");
// } else if (marks >= 70) {
//   console.log("B");
// } else {
//   console.log("Failed");
// }

// if(age>=18 && marks>8){
//     console.log("Allow");
// }else{
//     console.log("Not allow");
// }

// let age = 2;
// let id = true;

// if (age >= 18) {
//   if (id) {
//     console.log("Entry Allowed");
//   } else {
//     console.log("Id required");
//   }
// } else {
//   console.log("Under age");
// }

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// PRACTICE QUESTIONS
// Practical Example 1: Pass / Fail

// let marks = 39;

// if (marks >= 40) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// Practical Example 2: Login Check

// let username = "admin";
// let password = 1234;

// if (username === "admin" && password == "1234") {
//   console.log("Login Successful");
// } else {
//   console.log("Invalid username or password");
// }

// Practical Example 3: Positive / Negative / Zero

// let num = -1;

// if (num > 0) {
//   console.log("Positive number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
// }

// Practical Example 4: Even / Odd

// let number = 10;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// Practical Example 5: Age Category

// let age = 68;

// if (age < 13) {
//   console.log("Child");
// } else if (age < 20) {
//   console.log("Teenager");
// } else if (age < 60) {
//   console.log("Adult");
// } else {
//   console.log("Senior");
// }

// print 1 to 100

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(initialization-value; condition; updates){
//     //loop body / code
// }

// let i;

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i>= 0; i--) {
//   console.log(i);
// }

// Even Numbers

// for(let i=1; i<=10; i++){
//   if(i%2===0){
//     console.log(i);
//   }
// }

// while(condition){
//   //code
// }

// let i =1;

// while(i<=10){
//   console.log(i);
//   i++;
// }


// let i =11;

// do{
//    console.log(i);
//    i++;
// }while(i<=10);

// for(let i =1; i<=10; i++){
//   if(i===2){
//     // break;
//     continue;
//   }
//   console.log(i);
  
// }

// Nested loop
// for(let i =1; i<=3; i++){
//   for(let j =1; j<=3; j++){
//      console.log(i,j);
//   }
// }


// Functions in js

// function functionName(){
//     //code
// }

// Function Declaration
// function greet(n){
//     console.log("Welcome "+ n);
// }

//n - parameter
//ram - argument

// Function Call
// greet("ram");

// //1. function with parameter and return type
// function add(a,b){
//     // console.log(a+b);
//     return (a+b);
// }

// // let result = add(10,20); //fnc call
// // console.log(result);

// //2. function with parameter without return type
// function greet(name){
//     console.log("Welcome "+name);
// }

// greet("Ram");

// //3. function without parameter with return type
// function add(){
//     return 10+20;
// }

// let result = add();
// console.log(result);

// //4. function without parameter & return type
// function Hii(){
//     console.log("Hello");   
// }

// Hii();

// //Default Parameter

// function add(a,b=10){
//     // console.log(a+b);
//     return (a+b);
// }

// let rs = add(10,20); //fnc call
// console.log(rs);


// //Function Expression
// const greet = function(a,b){
//     console.log("Hello");
// }

// greet();

// //Arrow Function =>
// // const add = (a,b)=>{
// //     console.log(a+b);
// // }

// // const add = (a,b)=>a+b;

// add(10,20);

const greet = ()=> console.log("Welcome");

greet();
