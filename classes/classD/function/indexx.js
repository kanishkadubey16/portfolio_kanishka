// function declaration
// function abc(){
//     console.log("Hello World")
// }
// abc() //calling a function



// function greetmessage(userName){
//     const message = `hey${userName},aj thandi he chaye pia??`;
//     console.log(message)
// }
// const studentname = ["Ram","shyam"]
// for (let i = 0;i<studentname.length;i++){
//     greetmessage(studentname[i]) //here whilr calling the function we are passing value that is called arguments
// }

// function iscompatible(){
//     const value = Math.random()*50 +50;
//     if (value<70){
//         console.log("False")
//     }else{
//         console.log("True")
// }
// }
// iscompatible()
// iscompatible()


// // a,b,c,d parameters
// function multiply(a,b,c,c){
//     const result = a*b*c*date_of_birth;
//     console.log(result);
// }
// multiply (1,2,3,4);
// multiply(1,2,3);


// const result = multiply(1,2,3,4,5)
// console.log(result);

// function docode(){
//     return "Every Day 4 hours..."
// }
// const message  = docode("Debugging is important");
// console.log(message)

// // Arrow function
// // function getData(a,b){
// //     const sum = a+b;
// // }
// // const getData = (a,b)=> a+b;{
// //     console.log(a,b)

// const getData1 = (a,b)=>a+b;
// const rseult = getData1(20,30);
// console.log(`result`,rseult)

// // const divide = (a,b)=>{
// //     return a/b
// //}

// const divide = (a,b)=>a/b;

// const failedLog = ()=>{
//     console.log(`Please try again later`);
// }
// const SuccessLog=()=>{
//     console.log(`successfully submitted`)
// }
// const infoLog = () =>{
//     console.log(`Please do not move cursor here`)
// }

// // type = "Success","Failed","Info"
// const greetMessageGenerator = (type,SuccessCallback,FailedCallback,InfoCallback)=>{
//     if(type==='Success'){
//         SuccessCallback();
//     }else if(type==='Failed'){
//         failedLog()
//     }else{
//         infoLog();
//     }
// }
// greetMessageGenerator('Success',SuccessLog,failedLog,infoLog)

// const success = ()=>{
//     console.log('Hurrah it is done.')
//}
// if my cart
// const cartInfo = ()=>{
//     console.log('Items isout of stock')
// }
// const cartError = ()=>{
//     console.log('You cannot add more than 20 items.')
// }
// const cartSuccess = ()=>{
//     console.log('Item added in cart successfully')
// }
// greetMessageGenerator('success',cartSuccess,carInfo,cartError)


const namelog = () => {
    console.log('my name is vishal')
}
// name = vishal
const prestis = (name,namecallback) => {
    if (name === 'vishal'){
        namecallback();
    }
}

prestis('vishal',namelog)

const getDetails = (userName)=>{
    const getuserDetails = ()=>{
        console.log(`Hey ${username}`)
    }
    return getuserDetails
}
const func = getDetails('VishalnSharma')
func();
