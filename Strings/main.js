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

  alert(slice('hello world', 0 , 4))
  

// UV-2 Substring
function substring(str, from, to) {
    let result = "";
    for (let i = from; i < to; i++) {
        result += str[i];
    }
    return result;
  }
  alert(substring('hello world', 0 , 4))
