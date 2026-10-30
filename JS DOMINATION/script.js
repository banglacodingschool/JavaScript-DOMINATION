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

// let x = 10;
// console.log(x);

// x = x+5;

// x += 10;
// x -= 10;
// x *= 10;
// console.log(x);

// 3. Comparison Operators

// true or false

// let y = 10;
// let z = 10;

// console.log( y>z);
// console.log( y<z);
// console.log( y>=z);
// console.log( y==z);
// console.log( y!=z);

// == vs ===

// let num1 = 10;
// let num2 = "10";

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

// let count = 5;

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

// const greet = ()=> console.log("Welcome");

// greet();

// let name="kamal"; //global scope

// function greet(){
//     // let name="kamal"; //func scope
//     console.log("welcome " + name);

// }
// greet();

// console.log(name);

// if(true){
//     // var msg ="True"; // var is not block-scoped
//     let msg ="true"; // block scoped
//     console.log(msg);

// }

//     console.log(msg);

//hoisting
// console.log(name);

// var name="kamal";

// //fnc hoisting
// greet();

// function greet(){
//     console.log("hello");

// }

// let name = "   kamal manna   ";
// let name2 = 'kamal';
// let name3 = `kamal`; //template literal

// console.log(name);
// console.log(name2);
// console.log(name3);

// length
// console.log(name.length);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// console.log(name.trim());

// console.log(name.includes("zz"));

// let url = 'https://banglacodingschool.com';

// console.log(url.startsWith("https"));

// console.log(url.endsWith("com"));
//                     //n, n-1;
// console.log(url.slice(8,26));

// let rs= url.replace("bangla", "Bengali");

// console.log(rs);

// let colors = "red, blue, green";

// let result = colors.split();

// console.log(result);;

// let colors = ["red", "blue", "green"]; //arrays
//  indexing  - from 0 to ...
// console.log(colors[1]);
// console.log(colors);

// update
// colors[1] = "purple";

// console.log(colors.length);

// colors.push("yellow");

// console.log(colors);

// colors.pop()
// colors.pop()
// console.log(colors);

// colors.unshift("Purple");
// console.log(colors);

// colors.shift()
// console.log(colors);

// let data = ["kamal", 20, true, null]

// console.log(data);

// // array with loop

// for(let i=0; i<colors.length; i++){
//     console.log(colors[i]);
// }

// let fruits = ["Apple","Mango",'Banana'];

// fruits.forEach(function(fruit){
//   console.log(fruit);
// });

// fruits.forEach((fruit, index)=>{
//     console.log(fruit, index);
// })

// const numbers = [1,2,3,4];

// const double = numbers.map((number)=>{
//     return number *2;
// });

// console.log(double);

// const numbers = [10,15,20,25,30];

// const result = numbers.filter(number => number >= 20);
// console.log(result);

// const students = [
//     {name:"kamal", marks:97},
//     {name:"ram", marks:24},
//     {name:"rohit", marks:5},
// ];

// const passedStudents = students.filter(student=> student.marks>=40);

// console.log(passedStudents);

// const result = numbers.find(number => number>20);
// console.log(result);

// console.log(numbers.includes(20));

// console.log(numbers.indexOf(20));

// const rs = numbers.slice(1,3);
// console.log(rs);

//splice
// 1.remove

// let colors = ["red", "blue", "green"];

// colors.splice(1,2);
// console.log(colors);

// // add
// colors.splice(1,0,"Yellow");
// console.log(colors);

// colors.splice(0,1,"white");
// console.log(colors);

// Name, age, course, marks -- PROPERTIES
//   const student ={
//     name:"kamal",
//     age:21,
//     course:"BCA",
//     skills: ["music", "css", "js"],
//     marks:69
//   }

// console.log(student.name);
// console.log(student.marks);

// // update
// student.marks = 89;
// console.log(student.marks);

// student.year = 3;

// //add new property
// console.log(student.year);

// //delete
// delete student.marks;

// console.log(student);

//Methods
// const user = {
//     name:"kamal",

//     greet(){
//         console.log(this.name);
//     }
// }

// user.greet();

//nested object

// const std = {
//     name:"ram",

//     address:{
//         city:"kolkata",
//         country:"india"
//     }
// };

// console.log(std.address.country);

//Objects with array

// const student = {
//     name:"ram",
//     skills:["html", "css","js"]
// };

// // console.log(student.skills);

// student.skills.forEach(skill =>{
//     console.log(skill);
// })

// // 2.Array Destructuring

// const colors = ["red", "blue", "green"];

// // const first = colors[0];
// // const second = colors[1];

// // console.log(first);
// // console.log(second);

// //destructuring in array
// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);

// //default values
// const numbers = [10];

// const [a, b=20] = numbers;

// console.log(a);
// console.log(b);

// // 3.Object Destructuring

// const student = {
//     name:"kamal",
//     age:21,
//     course:'BCA'
// };

// // const {name, age, course} = student;

// // console.log(name);
// // console.log(age);
// // console.log(course);

// //default values
// // const {name, year=3} = student;

// // console.log(name);
// // console.log(year);

// const product = {
//     name:"Laptop",
//     price:50000,
//     brand:'HP'
// }

// const {name, price} = product;

// console.log(`Product: ${name}`);
// console.log(`Price: ${price}`);

// const numbers = [10,20,30];
// const numbers2 = [40,50,60];

// console.log(...numbers);

// //combine arrays
// const result = [...numbers, ...numbers2];
// console.log(result);

//copy

// const copy = [...numbers];

// copy.push(40);

// console.log(numbers);

// console.log(copy);

//3. Spread Operator with Objects

// const student = {
//   name: "kamal",
//   age: 20,
// };

// const updatedStudent = {
//   ...student,
//   course: "BCA",
//   //update
//   age: 22,
// };

// console.log(updatedStudent);

//4. Function-এ Spread Operator

// function add(a, b, c) {
//   return a + b + c;
// }

// const numbers = [10,20,30];

// console.log(add(...numbers));

//rest
// function sum(...numbers){
//     console.log(numbers);
// }

// sum(10,20,30,40);

// function sum(...numbers){
//    let total = 0;

//    for(let i =0; i<numbers.length; i++){
//     total += numbers[i];
//    }

//    return total;
// }

// console.log(sum(10,20,30));

// 6. Rest Operator with Destructuring

// const numbers = [10,20,30,40];

// const[a,b, ...remaining] = numbers;

// console.log(a);
// console.log(b);
// console.log(remaining);

// HOFs

// function greet(){
//     console.log("HEllow World!");
// }

// //hof
// function execute(callback){
//        callback();
// }

// execute(greet);

// function sayHello(){
//     console.log("Hello");
// }

// function process(callback){
//     console.log("Processing...");

//     callback();
// }

// process(sayHello);

//calculator

// function add(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// function calculate(a,b, operation){
//     return operation(a,b);
// }

// console.log(calculate(10,20,add));
// console.log(calculate(10,20,subtract));

// Synchronous vs Asynchronous JavaScript

// console.log("Synchronous");
// console.log("Synchronous2");
// console.log("Synchronous3");

// console.log("start");

// let total =0;

// for(let i =1; i<=3; i++){
//     total+=i;
// }

// console.log(total);
// console.log("End");

// console.log("start");

// setTimeout(()=>{
//     console.log("Async Task");
// },2000);

// console.log("End");

// setTimeout(Callback, delay);

// console.log("Start");

// const timer = setTimeout(()=>{
//     console.log("Hello JS");
// },2000);

// clearTimeout(timer);

// console.log("END");

// setInterval(()=>{
//     console.log("Hello");
// }, 2000);

// let count = 0;

// const interval = setInterval(() => {
//   count++;

//   console.log(count);

//   if (count === 5) {
//     clearInterval(interval);
//     console.log("Timer stopped");
//   }
// }, 1000);

//Digital Clock
// function showTime (){
//     const now = new Date();

//     console.log(now.toLocaleTimeString());
// }

// showTime();

// const clock = setInterval(showTime,1000);

// const prices = [100,200,300];

// console.log(prices);

// const pricesWithTax = prices.map(price =>{
//     return price * 1.18;
// });

// console.log(pricesWithTax);

// const students = [
//     {name:"kamal", marks: 85},
//     {name:"rahul", marks: 72},
//     {name:"priya", marks: 91},
// ]

// const names = students.map(student => student.name);

// console.log(names);

// const students = [
//     {name:"kamal", marks: 85},
//     {name:"rahul", marks: 72},
//     {name:"priya", marks: 91},
// ]

// const toppers = students.filter(student => {
//     return student.marks >=80;
// })

// console.log(toppers);

// const products = [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 8000 }
// ];

// const expensiveProduct = products.filter(product => product.price > 1000);

// console.log(expensiveProduct);

// const prices = [100, 200, 300];

// const total = prices.reduce((sum, price) => {
//   return sum + price;
// }, 0);

// console.log(total);

// const products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 8000 },
// ];

// const totalPrice = products.reduce((total, product) => {
//   return total + product.price;
// }, 0);

// console.log(totalPrice);

// const promise = new Promise((resolve, reject)=>{
//    resolve("Task Completed");
// })

// console.log(promise);

// const promise = new Promise((resolve, reject)=>{
//      const success = false;

//      if(success){
//       resolve("Data loaded successfully");
//      }else{
//       reject("Failed to load");
//      }
// })

// console.log(promise);

// const promise = new Promise((resolve, reject)=>{
//   resolve("Hellow Javascript");
// })

// promise.then((result)=>{
//   console.log(result);
// })

// const promise = new Promise((resolve, reject)=>{
//   reject("Something went wrong");
// })

// promise.then((result)=>{
//   console.log(result);
// })
// .catch((error)=>{
//   console.log(error);
// })

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Data received");
//   }, 2000);
// });

// promise.then((rs) => {
//   console.log(rs);
// });

// console.log("Fetching data..");

// Promise.resolve(5)
//   .then((number) => {
//     return number * 2;
//   })
//   .then((result) => {
//     return result + 10;
//   })
//   .then((finalResult)=>{
//     console.log(finalResult);
//   })
//   .catch((er)=>{
//     console.log(er);
//   })

// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     })
// }

// async function fetchData(){
//     const data = await getData();
//     console.log(data);
// }

// fetchData();

// async function getUsers() {
//   try {
//     let res = await fetch("https://randomuser.me/api/");

//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getUsers();

// try {

// } catch (error) {

// }

// FETCH API & JSON

// const user = {
//     "id": 1,
//     "name": "Kamal",
//     "email": "kamal@example.com"
// };

// json string to js object - parse

// const jsonData = '{"name":"Kamal","age":20}';

// const user = JSON.parse(jsonData);

// console.log(user.name);
// console.log(user.age);

// js object to json string -- stringify

// const student = {
//     name: "Kamal",
//     email: "kamal@example.com"
// };

// const jsonString = JSON.stringify(student);

// console.log(jsonString);

// https://jsonplaceholder.typicode.com/users/1

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => res.json())
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((er) => {
//     console.log("Error :", er);
//   });

  // async await Fetch API

//   async function getUser(){
//      try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const user = await response.json();
//         console.log("User Name:", user.name);
//         console.log("User Email:", user.email);
//         console.log("User Phone:", user.phone);

//      } catch (error) {
//         console.log("error: ", error.message);
//      } 
//   }

// getUser();


//DOM MANIPULTION
// getElementById()

// const title = document.getElementById("title");

// console.log(title);

// querySelector() -- SELECTS ONLY FIRST MATCHING ELEMENT

// const heading = document.querySelector("#title");
// const para = document.querySelector(".desc");

// console.log(heading);
// console.log(para);

// querySelectorAll() - SELECTS ALL MATCHING ELEMENTS

// const para2 = document.querySelectorAll("p");

// console.log(para2);


//CHANGE TEXT
// const title = document.querySelector("#title");

// const button = document.querySelector("#changeBtn");

// button.addEventListener("click", ()=>{
//   title.textContent = "Welcome to JS";
// });

//innerHTML VS textContent

// const message = document.querySelector("#message");

// // message.textContent = "Hello Students";
// message.innerHTML = "<strong>Hello Students</strong>";


const title = document.querySelector("#title");

// const styleBtn = document.querySelector("#styleBtn");

// styleBtn.addEventListener("click", ()=>{
//    title.style.color = "blue";
//    title.style.backgroundColor = "lightyellow";
//    title.style.padding = "10px";
// })


//classlist

// title.classList.add("highlight");
// title.classList.remove("highlight");
// toggle()


// const todoList = document.querySelector("#todoList");
// const addBtn = document.querySelector("#addBtn");

// addBtn.addEventListener("click",()=>{
//   const li = document.createElement("li");

//   li.textContent = "Learn JavaScript DOM";

//   todoList.appendChild(li);
// })


// Dark Mode Toggle

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
});
