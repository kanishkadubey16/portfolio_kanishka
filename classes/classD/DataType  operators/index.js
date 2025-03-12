// string datatype
let collegeName = "newton school of technology"
let studentName  = 'kanishka'
// Backtick (string template literals)
let friendsname = `Niharika`
let language = 'javascript'
let message = `Hey${studentName},Are you learning ${language}?`
console.log(message)

// Accessing character in string
let country = 'India';
console.log(country[0])


let course = 'Web Application Programming';
console.log(course[3])
console.log(course[4])
console.log(course[10])
console.log(course[14])
console.log(course[20])

// getting length of string
console.log(`total character in course subject:=>`,course.length)
console.log(course[27])

// checking whether string str1 exists in string str2 (includes method)
let str1 = "Gwalior"
let str2 = "I love Gwalior";
const doesMatch = str2.includes(str1);
console.log(`matching:=>`,doesMatch)

// number
let age = 20;
let percentage = 20.5

// Math.floor,Math.ceil,Math.max,Math.min
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))
console.log(Math.max(4,6,9,2,0))
console.log(Math.min(4,7,2,90))

console.log(Math.random()*8)

// Generating random number 2 to 8
const res = Math.floor(Math.random())*6+2;
// Boolean
const check = true;
const Uncheck  = false;

// In javascript '',0 considered as falsy valur;
// not a number(Nan)
console.log(4*'y');
console.log(1/0);
console.log(0/1);
// plus operstor
console.log('4'+2)

// minus operestor
console.log('4'-2)

// Equal operator (==) (===) (strict equal operators)
console.log(2=="2")
console.log(2==="2")

// checking data Type
let a = "2"+2
console.log(typeof a);
console.log(typeof typeof a)


// just declaration of variable soo we will get undefined.
let collegname;
if(collegname){
    console.log('Hey')
}else{
    console.log('False')
}



// declared the value and initialized
const studentname = 'Alex';
if(studentName){
    console.log('here is my name',studentname)
}else{
    console.log('student does not exist')
}


let city = '';
if(city){
    console.log('city name:',city);
}else{
    console.log('Please select a city')
}

console.log('ksnishka')
// 0,Undefined,null,NaN,''=> this all are falsy value.
// consverting string numeric value to number parseInt('80')//80
const Percentage = '80';
if(percentage>=90){
    console.log(parseInt('A+'))
}else if(percentage>=80 && percentage <90){
    console.log(parseInt('A'))
}else if(percentage>=70 && percentage <80){
    console.log(parseInt('B'))
}else if(percentage>=60 && percentage <70){
    console.log(parseInt('C'))
}else if(percentage>=50 && percentage <60){
    console.log(parseInt('D'))
}else if(percentage>=40 && percentage <50){
    console.log(parseInt('E'))
}else if(percentage >= 33 && percentage<40){
    console.log('Failed')
}

// switch
const day = 1;
switch(day){
    case 1:{
        console.log("Sunday")
        break
    }
    case 2:{
        console.log("Monday")
        break
    }
    case 3:{
        console.log("Tuesday")
        break
    }
    case 3:{
        console.log("Wednesday")
        break
    }
    case 4:{
        console.log("Thursday")
        break
    }
    case 5:{
        console.log("Friday")
    }
    case 6:{
        console.log("saturday")
    }
    // default{

    // }
}



// Ternary operator:
let firstname  = "kanishka";
if (firstname){
    firstname  = firstname +"sharma"
}else{
    firstname = "Guest";
}
firstname  = firstname ? firstname + "sharma":"Guest"

const result = percentage > 80 ? 'pass':'Failed';
const re = percentage > 90|| percentage<=80 ? 'pass':'Failed';
console.log('re',re);

// For loop
for(let i = 0 ; i<5 ; i++){
    console.log('i+',i)
}
// while loop
let count = 0;
while(count>0){
    console.log(count);
    count ++;
}
// do-while loop
do{
    console.log('HI here i am running')
}while(count<0)


// basic of array and object

let users = ['Alex','Rim','Tom'];
const employee = {
    name: 'alex',
    lastName:'Alexander',
    salary :'3.4',
}
console.log('employee',employee)
console.log(users)

// iteration of objects
for(let i in employee){
    console.log(i)
}
for(let i in users){
    console.log(i)
}

// for..of can be use only in array this will give the value of array
for(let value of users){
    console.log(value)
}
for (let i in employee){
    console.log(i)
}





