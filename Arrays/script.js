//UV-1 pop
   function pop(arr) {
      let arr2 = []
      for (let i = 0; i < arr.length - 1; i++){
      arr2[i]=arr[i]
      }
      return arr2
   }
   pop(['hello', 'world', 'ok'])


//UV-2 push
   function push(arr, value) {
       arr[arr.length] = value;
       return arr;
   }
   push(['hello', 'world', 'hi'], 'world')


//UV-3 shift
   function shift(arr) {
       let arr2 = [];
       for (let i = 1; i < arr.length; i++) {
       arr2[i] = arr[i];
       }
       return arr2;
   }
   shift(['hello','world', 8])

//UV-4 unShift
   function unShift(arr, item){
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
       arr2[i+1] = arr[i];
      }
      arr2[0] = item
      return arr2;
   }
   unShift(['hello', 'world'], 'open')


//UV-5 join
   function join(arr, item){
     let string = ' '
     for(let i = 0; i < arr.length;i++){
         string += arr[i] + item
     }
     return string
   }
   join(['open','web','academy'], ',')


//UV-6 split
   function split(arr, item){
     let string = []
     for(let i = 0; i < arr.length;i++){
        string += arr[i] + item
     }
     return `[${string}]`
   }
   split('open web academy', ' ,')