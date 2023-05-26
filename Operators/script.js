// Takrorlanadigan sonlar yig'indisi
let arr = [2,3,4,3,3,4,4,5,6,7,7,95,95];
 let arr2 = [];
 for (let i = 0; i < arr.length; i++) {
    for(let num = i + 1; num < arr.length; num++){
        if(arr[i] === arr[num] && !arr2.includes(arr[i])){
            arr2.push(arr[i])
        }
    }
 }
    alert(arr2)


//arrni yig'indisi
let arr = [2,3,4,4,6,9]
let num = 0
arr.forEach(function(item){
    num += item
})
alert(num)


//manfiy sonlar yig'indisi
let arr = [2,-3,-4,4,-6,9]
let num = 0
arr.forEach(function(item){
    if(item < 0){
       num += item * -1
    }
})
alert(num)