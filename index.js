/*
const marks = {
  ajay: 96,
  amit: 92,
  abhi: 47,
  ram: 94,
  shyam: 26,
};

for(let key in marks){
  console.log("The marks of " + key + " are " +marks[key]);
}
*/

// const mean = (a, b, c, d) => {
//   return (a + b + c + d) / 4;
// };
// console.log("The mean will be ", mean(13, 14, 15, 16));

// let name = "priyanshu";
// console.log(name.slice(0,7));

// const arr = [1,2,3,4,5];
// arr.forEach((element,1,arr) {
//   console.log(element*4);         //foreach loop
// });

// let name="priyanshu";
// let newname = name.replace("priyanshu","priyanshu bhai");

// let str = "Please give Rs 1000";
// let amount = Number.parseInt(str.slice("Please give Rs ".length));
// console.log("the amount is ",amount);
// console.log(typeof amount);a

// let arr = [97, 67, 93, 34, 45, false, "not given", null];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// let a = arr.join("_");
// console.log(a);

// let compare =(a,b)=>{                     //a-b== ascending order, b-a== descending order
//   return b-a;
// }
// let arr = [1,22,345,95,12,4,235,78,45];
// arr.sort(compare);
// console.log(arr);

// let arr = [1, 22, 345, 95, 12, 4, 235, 78, 45];
// arr.splice(4, 3, 34, 56, 234); //format of splice (kidhr add karna h,kitna remove karna h,kya kya add karna h)
// console.log(arr);

// let arr = [45,78,34,23,19];
// let a = arr.map((v,i,arr)=>{
//   console.log(v,i,arr);
//   return v+i;
// })
// console.log(a);            //map method

// let arr = [45,78,34,23,19];
// let a = arr.filter((v)=>{
//   return v%2==0;
// })
// console.log(a);              //filter method

// let arr = [45,78,34,23,19];
// let c = arr.reduce((a,b)=>{
//   return a+b;
// })
// console.log(c);               //reduce method

// let name="priyanshu";
// let a = Array.from(name);
// console.log(a);          //array.from method

// let arr = [45, 78, 34, 23, 19];
// for (let i of arr) {
//   console.log(i); //for.of loop
// } //returns array elements

// let arr2 = [45, 78, 34, 23, 19];
// for (let item in arr2) {
//   console.log(item); //for.in loop
// } //returns array index

// let a = 10;              //globally scoped variable
// function func(){
//   let b=20;               //function scoped variable
//   console.log(b);
// }
// func();
// console.log(a);
// console.log(b);

// function init() {
//   let name = "priyanshu"; //closures -- a lexical environment for the function called
//   function display() {
//     name = "Priyanshu bhaii";
//     console.log(name);
//   }
//   return display;
// }

// let a = init();
// a();

// function returnfunc() {
//   //closures -2nd example
//   const x = () => {
//     let a = 1;
//     console.log(a);
//     const y = () => {
//       let a = 2;
//       console.log(a);
//       const z = () => {
//         let a = 3;
//         console.log(a);
//       };
//       z();
//     };
//     y();
//   };
//   return x;
// }

// let a = returnfunc();
// a();

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   let arr1 = [14, 22, 34, 40, 38, 27];
  
//   function askForNumber() {
//     readline.question("Enter a number (enter 0 to stop): ", (input) => {
//       let a = Number.parseInt(input);
//       if (a === 0) {
//         console.log("Final array:", arr1);
//         readline.close();
//       } else {
//         arr1.push(a);
//         askForNumber(); // Recursively ask for the next number
//       }
//     });
//   }
  
//   askForNumber();

// let arr1=[14,22,34,40,38,27]
// let a;
// do{
//   a=prompt("Enter number(Enter 0 to stop)");
//   if()
//   a=Number.parseInt(a);
//   arr1.push(a)
// }while(a!=0){
//   console.log(arr1);
// }

// let a = setTimeout(function(a) {
//   alert("hello");
// }, 5000);


// let b = prompt("Want to continue");
// if(b=="y"){
//   setTimeout(a);
// }
// else{
//   clearTimeout(a);
// }

// const sum=(a,b)=>{
//   alert("running " + (a+b));
//   a+b
// }

// setTimeout(sum,5000,3,4);
// // setInterval(function(){
// //   alert("running")

// // },5000);

// let a = document.querySelector("#first");


// let x = function(e){
//   alert("priyanshu1");
//   console.log(e);
// }

// let y = function(e){
//   alert("priyanshu2");
// }

// a.addEventListener('click',x);
// a.addEventListener('click',y);

// let b = prompt("Enter the number");

// if(b == "1"){
//   a.removeEventListener('click',y);
// }

// document.getElementById("google").addEventListener('click',function() {
//   window.location = "https://www.google.com";
//   window.focus();
// })

// document.getElementById("fb").addEventListener('click',function() {
//   window.location = "https://www.facebook.com";
//   window.focus();
// })

// document.getElementById("twitter").addEventListener('click',function() {
//   window.location = "https://www.twitter.com";
//   window.focus();
// })



// // Callbacks
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//           console.log("Loaded script with SRC: " + src)
//           callback(null, src);
//   }
//   script.onerror = function() {
//           console.log("Error loading script with SRC: " + src);
//           callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//           console.log(error)
//           return
//   }
//   alert('Hello World!' + src);
// }




// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//   if (error) {
//           console.log(error)
//           sendEmergencyMessageToCeo();
//           return
//   }
//   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
//           if (error) {
//                   console.log(error)
//                   sendEmergencyMessageToCeo();
//                   return
//           }
//           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
//                   if (error) {
//                           console.log(error)
//                           sendEmergencyMessageToCeo();
//                           return
//                   }
//                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
//                           if (error) {
//                                   console.log(error)
//                                   sendEmergencyMessageToCeo();
//                                   return
//                           }
//                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
//                                   if (error) {
//                                           console.log(error)
//                                           sendEmergencyMessageToCeo();
//                                           return
//                                   }
//                                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
//                                           if (error) {
//                                                   console.log(error)
//                                                   sendEmergencyMessageToCeo();
//                                                   return
//                                           }
//                                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
//                                                   if (error) {
//                                                           console.log(error)
//                                                           sendEmergencyMessageToCeo();
//                                                           return
//                                                   }
//                                                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
//                                                           if (error) {
//                                                                   console.log(error)
//                                                                   sendEmergencyMessageToCeo();
//                                                                   return
//                                                           }
//                                                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
//                                                   })
//                                           })
//                                   })
//                           })
//                   })
//           })
//   })
// })
// // Callback hell/Pyramid of doom


// let promise = new Promise(function(resolve,reject){
//         alert("hello");
//         resolve(69);
//         reject(59);
// })

// console.log("Hello one");
// setTimeout(function(){
//         console.log("hello two");
// },4000)

// console.log("hello three");
// console.log(promise);

// let p1 = new Promise((resolve,reject) =>{
//         console.log("Pending");
//         setTimeout(()=>{
//                 console.log("Resolved");
//                 resolve(69);
//         },5000);
// })

// let p2 = new Promise((resolve,reject) =>{
//         console.log("Pending");
//         setTimeout(()=>{
//                 console.log("Rejected");
//                 reject(19);
//         },5000);
// })

// p1.then((value)=>{
//         console.log(value);
// })
// p2.catch((error)=>{
//         console.log("Error occured");
// })

// console.log(p1,p2);        //then(),catch()

// let p1 = new Promise((resolve,reject)=>{
//         console.log("resolved after 5 seconds");
//         setTimeout(()=>{
//                 resolve(69);
//         },5000);

// }).then((value)=>{
//         console.log(value);
//         let p2 = new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         resolve(34)
//                 },5000);
//         })
//         return p2;
// }).then((value)=>{
//         console.log("done");
//         return 1
// }).then((value)=>{
//         console.log("final done");
//         return 2;
// })                //promise chaining




//promise api

// let p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 resolve("value 1");
//         },1000);
// });

// let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 resolve("value 2");
//         },2000);
// });

// let p3 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 resolve("value 3");
//         },3000);
// });

// // let all = Promise.all([p1,p2,p3]);     //sabka combined array dega
// //let settle = Promise.allSettled([p1,p2,p3]);   //combined array with errors
// //let race = Promise.race([p1,p2,p3]);           //sabse kam time wala dega,agr error hua toh error
// let any = Promise.any([p1,p2,p3]);          //first promise ka value dega,all errors then error
// any.then((value)=>{
//         console.log(value);
// })                                       //6 methods: all,allsettled,race,any,resolve,reject



//async-await




// async function priyanshu(){
//         let delhiweather = new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         resolve("10 degrees");
//                 },3000);
//         })

//         let mumbaiweather = new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         resolve("18 degrees");
//                 },7000);
//         })

//         let chennaiweather = new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         resolve("23 degrees");
//                 },12000);
//         })

//         console.log("fetching delhi weather: ");
//         let delhiw = await delhiweather;;
//         console.log("Fetched delhi weather: "+ delhiw);

//         console.log("fetching mumbai weather: ");
//         let mumbaiw = await mumbaiweather;;
//         console.log("FEtched mumbai weather: "+ mumbaiw);

//         console.log("fetching chennai weather: ");
//         let chennaiw = await chennaiweather;;
//         console.log("Fetched chennai weather: "+ chennaiw);

// }

// const priyanshu1 =async()=>{
//         console.log("hello world");
// }

// const main1 = async()=>{                    //async function has the ability to run multiple functions run parallelely
//         console.log("welcome");
//         let a = await priyanshu()       //await will make one function run first,then move on to the next function
//         let b = await priyanshu1();     //awiat will make js wait for one promise to settle,returns its value and then moving on to the next promise.
// }

// main1();




//error handling


// setTimeout(()=>{
//         console.log("hello world")
// },2000);

// try{
//         console.log(hello)            //tries the code(only synchronous code without any time)
// }catch(err){
//         console.log("Error handled");    //try catch doesnot work inside asynchronous code like settimeout!!!
// }
// setTimeout(()=>{
//         console.log("hi world")
// },4000);

// setTimeout(()=>{
//         console.log("namaste world")
// },6000);
// setTimeout(()=>{
//         console.log("ram ram world")
// },8000);



//error object //custom error

// try{
//         console.log(hello)
// }catch(err){
//         console.log(err.name)       //reference error
//         console.log(err.message)       //hello is not defined
//         console.log(err.stack)         //both combined
// }


//finally clause


// const func =()=>{
//         try{
//                 console.log(hello)
//         }catch(err){
//                 console.log(err.name)
//                 console.log(err.message)
//                 console.log(err.stack)
//         }finally{                    //finally har case me chalega,irrespective of errors in both try and catch
//                 console.log("radhe radhe");
//         }
// }
// func();
// console.log("hello");


//loadscript using async await

// const loadscript = async(src)=>{
//         return new Promise((resolve,reject)=>{
//                 let script = document.createElement("script");
//                 script.src = src
//                 script.onload = ()=>{
//                         resolve(src);
//                 }
//                 document.head.append(script);
//         })
// }

// const main1 = async()=>{
//         let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
//         console.log(a);
// }

// main1();



//using promise
// let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//         console.log(value);
// })


// let p = ()=>{
//         return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         reject(new Error("error occured after 3 seconds"));
//                 },3000)
//         })
// }

// let a = async()=>{
//         try{
//                 let b = await p();
//                 console.log(b);
//         }catch(err){
//                 console.log("Error is handled");
//         }
// }
// a();

let p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(69);
        },1000)
})
let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(45);
        },3000)
})
let p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(56);
        },4000)
})

let all = Promise.all([p1,p2,p3]);
all.then((value)=>{
        console.log(value);
})



