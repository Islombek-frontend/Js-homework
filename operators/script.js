//Takrorlanadigan sonlar yig'indisi
 let numbers = [2,3,4,3,3,4,4,5,6,7,7,95,95];
  let arr2 = [];
  for (let i = 0; i < numbers.length; i++) {
     for(let num = i + 1; num < numbers.length; num++){
         if(numbers[i] === numbers[num] && !arr2.includes(numbers[i])){
             arr2.push(numbers[i])
         }
     }
  }
    alert(arr2)


//arrni yig'indisi
 let numbers = [2,3,4,4,6,9]
 let num = 0
 numbers.forEach(function(item){
     num += item
 })
 alert(num)


//Manfiy sonlar yig'indisi
let numbers = [2,-3,-4,4,-6,9]
let num = 0
numbers.forEach(function(item){
    if(item < 0){
       num += item * -1
    }
})
alert(num);