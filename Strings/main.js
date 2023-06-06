// UV-1 Slice
function slice(str, from, to) {
    let newStr = "";
    if (from === undefined) {
        from = 0;
    }
    if (to === undefined) {
        to = str.length;
    }
    for (let i = from; i < to; i++) {
        newStr += str[i];
    }
        return newStr;
  }

  slice('hello world', 0 , 4)
 

// UV-2 Substring
function substring(str, from, to) {
    let result = "";
    for (let i = from; i < to; i++) {
        result += str[i];
    }
    return result;
  }
  substring('hello world', 0 , )


//UV-3 Substr
function substr(str, from, to) {
    let result = "";
    for (let i = from; i < to+from; i++) {
        result += str[i];
    }
    return result;
  }
  substr('hello world', 4 , 5)


//UV-4 indexOf
 function indexOf(str, length ) {
    for (let i = 0; i < str.length; i++) {
        if(str[i] === length){
            return i
        }
    }
    return -1
 }
 indexOf('hello world', 'l') //3


//uv-5 Includes 
function includes(str, length){ 
     for(let i = 0; i < str.length; i++) {
        if(str[i] === length){
            return true
        }
     }
     return false
}
includes('hello world', 'p')

//UV-6 startsWith
function startsWith(str, from){
     if(str[0] === from){
        return true
     }
     return false
}
startsWith('hello world', 'e')


//UV-7 endsWith
function ensdsWith(str, from){
    if(str[str.length - 1] === from){
        return true
    }
    return false
}
ensdsWith('hello world', 'l')


//UV-8 repeat
function repeat(str, count){
    let result = ''
        for(let j = 0; j < count; j++) {
             result += str
     }
    return result
}
repeat('hello world', 3)