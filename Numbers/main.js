//UV-1 Math.abc
  function abc(x){
      return x*-1
  }
    abc(-18) //18

//UV-2 Math.pow
  function pow(x, y){
      return x**y
  }
    pow(10,2) //100

//UV-3 Math.trunc
  function trunc(num){
      return num - num % 1
  }
  trunc(23.7) //23

//UV-4 Math.floor
  function floor(number){
     let num = number - number % 1;
     let num2 = 0
      if (num > 0){
         num2 += num;
      } else{
         num2 += num - 1
      }
      return num2
  }
    alert(floor(15.8))//16

//UV-5 Math.ceil
   function ceil(number){
      let num = number - number % 1;
      let num2 = 0
       if (num > 0){
         num2 += num+1;
       } else{
         num2 += num
       }
       return num2
  }
    ceil(-15.1)//-15

//UV-6 Math.round
    function round(num){
        let result = 0
        let number = num % 1
        let number2 = num - number
        if(number >= 0.5){
            result = number2 + 1
        } else {
            result = number2
        }
        return result
  }
       round(15.4) //15

// //UV-7 Math.sqrt
       function sqrt(num) {
        let num2 = num / 2;
        let number = 0; 
        while (num2 !== number) {
            number = num2;
            num2 = (num2 + num / num2) / 2; 
        }
        return num2;
  }
        sqrt(25) //5


       function sqrt(num) {       
           return num ** 0.5
  }
        sqrt(25) //5