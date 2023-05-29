//Homework #1
let numbers = [1,2,3,4,5,6,7]
let num = 0
function calcAverage(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    num += numbers[i]
  }
  return num / numbers.length
}
calcAverage(numbers)


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
getCount('abracadabra')


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