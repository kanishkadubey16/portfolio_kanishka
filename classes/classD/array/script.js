// const array = [1,2,3,4,5,6]
// // adding item to array at the last
// array.push(39,30,32)
// console.log(array)
// // adding at the first
// array.unshift('45','67')
// console.log(array)

// // checking what will return array.pop
// // removing item from last 
// array.pop()
// console.log('Array pop',array)

// // removing item from first
// array.shift()
// console.log('Array shift',array)

// const sentence = 'vishal Sharma';
// const arrayData = sentence.split(' ')
// console.log(arrayData1)


function parent(cb){
   return function(num){
          let name1 = cb(num)
          
          console.log(name1)
   }
}

let name = parent(f1)
name(10)


function f1(n1){
    return 5*n1
}

