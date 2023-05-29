// Takrorlanadigan sonlar yig'indisi
// let numbers = [2,3,4,3,3,4,4,5,6,7,7,95,95];
//  let arr2 = [];
//  for (let i = 0; i < numbers.length; i++) {
//     for(let num = i + 1; num < numbers.length; num++){
//         if(numbers[i] === numbers[num] && !arr2.includes(numbers[i])){
//             arr2.push(numbers[i])
//         }
//     }
//  }
//     alert(arr2)


//arrni yig'indisi
// let numbers = [2,3,4,4,6,9]
// let num = 0
// numbers.forEach(function(item){
//     num += item
// })
// alert(num)


//manfiy sonlar yig'indisi
// let numbers = [2,-3,-4,4,-6,9]
// let num = 0
// numbers.forEach(function(item){
//     if(item < 0){
//        num += item * -1
//     }
// })
// alert(num)


//Homework #1
let numbers = [1,2,3,4,5,6,7]
let num = 0
function calcAverage(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    num += numbers[i]
  }
  return num / numbers.length
}
console.log(calcAverage(numbers))


//Homework #2
function getCount(str) {
  let arr = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'o`' || str[i] ==='u'){
     arr += str[i].length
  }
  }
  return arr.length
}


//Homework #3

 function isPalindrome(x) { 
     x = x.toLowerCase()
     let res = '';
     for (let i = 0; i < x.length; i++){
         res = x[i] +=  res 
     }
     if(res == x){
       return true
     }else{
       return false
     }
 }
