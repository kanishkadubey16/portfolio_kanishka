// async / await



// function toTriggerAfterSomeTime(){
//     console.log("I am runnin after 2 second")
// }
// setTimeout(toTriggerAfterSomeTime, 2000) // time is in miliseconds

// setTimeout(()=>{
//     console.log("Hi")
//     setTimeout(() => {
//         console.log("Hey chill")
//         setTimeout(() => {
//             console.log("Cool hai guys!!!")
//         }, 1000);
//     }, 2000)
// }, 1000)

// function callAfterDelay(){
//     console.log('Hey I am going to repeat myself')
// }

// const timerId = setInterval(callAfterDelay , 2000)

// setTimeout(()=>{
//     clearInterval(timerId)
// },16000)

// console.log("hello")

// setTimeout(()=> {
//     console.log("Hi");
// },0)

// for(let i=0;i<50;i++){
// console.log("bye")
// }

// for(let i=0;i<3;i++){   //press cmd+(-)   //For every iteration, there will be a setTimeout called in the asynchronous thread
//     setTimeout(()=> console.log(i),1000)  //In asynchronous thread all the three setTimeout will be executed simultaneously, total time= 1.062 sec
// }

// let i=0;
// while(i<3){
//     setTimeout(()=> console.log(i),1000);
//     i++;
// }

// const promise=new Promise(()=>{})
// console.log(promise) //Promise { <pending> }

// const promise=new Promise((resolve,reject)=>{
//     resolve()
// })
// console.log(promise) //Promise { <fulfilled> }

// const promise=new Promise((resolve,reject)=>{
//     resolve("Hello World")
// })
// console.log(promise) //Promise { <fulfilled>: 'Hello World' }

// const promise=new Promise((resolve,reject)=>{
//     reject("error 404")
// })
// console.log(promise) //Promise { <rejected>: 'error 404' }

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("2 sec got completed");
//     },2000)
// })
// console.log(promise);
// const id=setInterval(()=>{
//     console.log(promise);
// },1000);
// clearInterval(id,10000);

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("2 sec got completed");
//         // reject("something went wrong");
//     },2000)
// })
// promise.then((data)=>{
//     console.log("then");
//     console.log(data)
// }).catch((error)=>{
//     console.log("catch");
//     console.log(error)
// }).finally(()=>{
//     console.log("finally") //finally executes whenever state changes, no matter if it is res or rej
// })

// let mypromise=new Promise((resolve,reject)=>{
//     let a=5;
//     let b=5;
//     if(a==b){
//         resolve('Promise fulfilled...')
//     } else{
//         reject('Promise not fulfilled...')
//     }
// })
// console.log(mypromise)

// let hello=new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("hello")
//     },3000)
// }).then((data)=>{
//     return new Promise((resolve) => {  
//         resolve(data)
//     })
// })
// setTimeout(()=>console.log(hello),3000)

// const createPromise= function(status1){
//     return new Promise((resolve,reject)=>{
//         if(status1){
//             resolve("NST")
//         }else{
//             reject("Failed")
//         }
//     })
// }
// createPromise(true)
// .then(()=> createPromise(false))
// .then(()=> createPromise(true))
// .catch(()=> createPromise(false))

// const fetchPromise = fetch("https://dummyjson.com/products"); //fetch returns a buffer which is not human readable

// console.log(fetchPromise);
// setTimeout(()=> {
//     console.log(fetchPromise);
// },2000);

// fetchPromise.then(function(data){
//     console.log(data.body)
// })

// fetchPromise.then(response => {
//     console.log(response.body, response.status, response.ok)
//     return response.json()})
//     .then(data => console.log(data))  //.json() is asynchronous, it returns a promise therefore we have to use .then  block, it converts buffer to human readable form
//     .catch((error) => {console.log(error)}) //.catch only handles network failures, it doesn't handles the error sent by the server


//200-299 success
//400-499 client side error
//500-599 server side error

// const promise = fetch({
//     url: '',
//     method: 'POST',
//     body: JSON.stringify({
//         email: "@gmail.com",
//         password: '136778'
//     })
// })

// fetch(url='') === fetch({   // by default fetch() is using get method so we don't have to write the code but for post we have to write complete code
//     method: 'GET',
//     url: ''
// })

//below both codes are same, line 165 and 172

// function createPromise(){
//     return new Promise(function(res,rej){
//         res();
//         rej("error");
//     })
// }

// async function createPromise(){  //async function wraps a complete function into a promise, if keyword is return then promise will be resolved even if we return error, if keyword is throw then promise will be rejected

//     return undefined; //=== res()
//     throw "error"; //=== rej("error")

// //if we doesn't return anything then by default return undefined will be executed and promise will be resolved with data undefined
// }

//below both codes are same,

// async function fetchUser(){
//     fetch("api.com").then(res => {
//         console.log(res.body)
//         return res.json()
//     }).then(data => {console.log(data)})
// }

// async function fetchUser(){
//     const res = await fetch("api.com")
//     console.log(res.body)
//     const data = await res.json()
//     console.log(data)
// }

function getAffordableBuses(apiUrl, maxPrice) {
    return fetch(apiUrl)
    .then(response => {
        // if (!response.ok) {
        //         throw new Error(`HTTP error! Status: ${response.status}`);
        //     }
        return response.json();
        })
    .then((data) => {
        return data
            .filter((elem) => {
            return parseFloat(elem.ticketPrice)<=maxPrice
        }).map(elem => elem.busName).sort()
         })
        .catch(error => {
            console.log(error);
        });
}
console.log(getAffordableBuses("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses",700))












