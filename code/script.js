// // function sumOfDifferences(arr) { 
// //    let result = 0;
// //    for (let i = 0; i < arr.length; i++){ 
// //        result += arr[i] * arr[i];
// //   }
// //   return Math.(result)
// // }

// // console.log(sumOfDifferences([1, 2, 10]))

// // function maxSumBetweenTwoNegatives(a) { 
// //     let result = 0; 
// //     let result2 = 0; 
// //     let result3 = 0;
// //     for (let i = 0; i < a.length; i++){ 
// //       if (a[i] > 0){ 
// //         result += a[i]; result2 += a[i]; result3 += a[i];
// //       }for ( let j = i + 1; j < a.length; j++){ 
// //         if 
// //       }
// //     }
// // }

// // function duplicateCount(text){
// //     let box3 = 0
// //     for(let i = 0; i < text.length; i++){
// //         // for (let j = 0; k < text[i].length; j++
// //         if (text[i] === undefined){ continue;}
// //     } 
// //      console.log(box3);
// //   }
// //   console.log(duplicateCount('aabbcde'));


// // function getSum(a, b){
// //     let sum = 0;
// //     if(a > b){ // agar a katta bo'lsa
// //         let temp = a; // a va b ni almashtiramiz
// //         a = b;
// //         b = temp;
// //     }
// //     for(let i = a; i <= b; i++){
// //       sum += i
// //     }
// //     return sum;
// // //   }
// //   console.log(getSum(0,-1)); //15



// // function removeChar(str){
// //     let str1=[]
// //     for(let i = 1; i < str.length -1; i++){
// //       str1.push(str[i])
// //     }
// //     return str1.join('')
// //   };
// //   console.log(removeChar('eloquent'));


// // function DNAtoRNA(dna) {
// //   let str = ''
// //   for(let i =0; i < dna.length; i++){
// //     if(dna[i] === 'T'){
// //       str += 'U'
// //     }else(
// //       str += dna[i]
// //     )
// //   }
// //   return str
// // }
// // console.log(DNAtoRNA('ASADGT'));

// // var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
// // function print(str) {
// //   let result = ''
// //   for (let i = 0; i < str.length; i++)
// //     if(!result.includes(str)){
// //       result += str
// //     }
// //     return result
// //   }
// //   console.log(print(s));
 


// // function squareDigits(box3){
// //     let result = String(box3).split('')
// //     return result.length
// //   }
// //   console.log(squareDigits(163256));

// // function calc(box3) {
// //    function  (box3){ 
// //     if(box3 == 1){
// //         return 1
// //     }else{
// //         return box3 + calc(box3 - 1)
// //     }
// // }
// // }
// // console.log(calc(10));


// // let box3 = [1,3,5,5]
// // let nums = [3]
// // let newArr = nums.filter(function(item,index,arr){
// //     if(arr !== [] && box3[arr] !== []){
// //         return  box3.indexof(item)
// //     }
// //         return []
// // })
// // console.log(newArr);

// // let str = 'camelCasing'
// // str = str.split('')
// // let arr = ''
// // str.forEach(item => {
// //     if(item == item.toUpperCase()){
// //         arr += ' '
// //     }
// //     return arr+=item
// // })
// // console.log(arr);



// // let text = "The rain in SPAIN stays mainly in the plain";
// // let result = text.match("pl");
 
// // console.log(result);





// // let body = document.createElement('body')
// // body.style.cssText = `
// //       height: 98vh;
// //       display: flex;    
// //       box-sizing: border-box;
// //       margin: 0;
// //       padding: 0;
// //       justify-content: center;
// //       align-items: center;
// //       background-color: #F2EAE2;
// // `
// // document.body.append(body)

// // let container = document.createElement('div')
// // container.classList.add('container')
// // container.style.cssText = ` 
// //      width: 600px;
// //      height: 450px;
// //      display: flex;
// //      justify-content: space-between;`
// // body.append(container)

// // let img = document.createElement('img')
// // img.src = "/img/image.jpg"
// // img.style.cssText = `
// //      border-bottom-left-radius: 10px;
// //      border-top-left-radius: 10px;
// // `
// // container.append(img)

// // let section = document.createElement('section')
// // section.classList.add('section')
// // section.style.cssText = `
// //      width: 300px;
// //      height: 420px;
// //      background-color: #fff;
// //      border-top-right-radius: 10px;
// //      border-bottom-right-radius: 10px;
// //      padding: 32px 0 0 32px;
// //      display: flex;
// //      flex-direction: column;
// // `  
// // container.append(section)


// //  let section_info = document.createElement('div')
// //  section_info.classList.add('section_info')
// //  section_info.style.cssText = `
// //      height: 70%;
// //  `
// //  section.append(section_info)

// // let h3 = document.createElement('h3')
// // h3.classList.add('h3')
// // h3.innerText = 'PERFUME'
// // h3.style.cssText = `
// //       font-size: 12px;
// //       font-weight: 500;
// //       letter-spacing: 5px;
// // `
// // section_info.append(h3)

// // let h1 = document.createElement('h1')
// // h1.classList.add('h1')
// // h1.innerText = 'Gabrielle Essence Eau De Parfum'
// // h1.style.cssText = `
// //       margin-top: 20px;
// //       color: #1C232B;
// //       font-size: 32px;
// //       font-family: Fraunces;
// //       font-weight: 700;
// //       line-height: 32px;
// // `
// // section_info.append(h1)

// // let p = document.createElement('p')
// // p.classList.add('p')
// // p.innerText = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
// // p.style.cssText = `
// //       margin-top: 24px;    
// //       color: #6C7289;
// //       font-size: 14px;
// //       font-family: Montserrat;
// //       font-weight: 500;
// //       line-height: 23px;
// // `
// // section_info.append(p)

// // let price = document.createElement('div')
// // price.classList.add('price')
// // price.style.cssText = `
// //      margin-top: 29px;    
// //      height: 32px;
// //      display: flex;
// //      gap: 19px;
// //      align-items: center;
// // `
// // section_info.append(price)

// // let h2 = document.createElement('h2')
// // h2.classList.add('h2')
// // h2.innerText = '$149.99'
// // h2.style.cssText = `
// //     color:  #3D8168;
// //     font-size: 32px;
// //     font-family: Fraunces;
// //     font-weight: 700;
// //     line-height: 32px;
// // `
// // price.append(h2)

// // let text = document.createElement('h4')
// // text.classList.add('text')
// // text.innerText = '$169.99'
// // text.style.cssText = `
// //     color: #6C7289;
// //     font-size: 13px;
// //     font-family: Montserrat;
// //     font-weight: 500;
// //     line-height: 23px;
// //     text-decoration-line: strikethrough;
// // `
// // price.append(text)

// // let button = document.createElement('button')
// // button.classList.add('btn')
// // button.innerText = 'Add to Cart'
// // button.style.cssText = `
// //     width: 236px;
// //     height: 48px; 
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     gap: 10px;
// //     cursor: pointer;
// //     color:  #FFF;
// //     font-size: 14px;
// //     font-family: Montserrat;
// //     font-weight: 700;
// //     border: none;
// //     margin-top: 60px;
// //     border-radius: 8px;
// //     background: #3D8168;
// // `
// // section.append(button)

// // let image = document.createElement('img')
// // image.classList.add('image')
// // image.src="/img/Cart.png"
// // button.prepend(image)













let genrate = document.querySelector('.generate')
let upperCase = document.querySelector('.upper')
let box2 = document.querySelector('.box2')
let symbol = document.querySelector('.symbol')
let number = document.querySelector('.number')
let btn = document.querySelector('button')

let tolowerCase = 'abcdefghijklmnopqrstuvwxyz';
let tupperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let box3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let box4 = ['@', '$', '_', '#'];

btn.addEventListener('click', () =>{
    genrate.target.value = Math.floor(Math.random() * tolowerCase.length);
})


let sliderValue = document.querySelector("sliderValue");
let slider = document.querySelector("slider");
let rangeInputs = document.querySelectorAll('input[type="range"]');
let bar1 = document.querySelector("bar1");
let bar2 = document.querySelector("bar2");
let bar3 = document.querySelector("bar3");
let bar4 = document.querySelector("bar4");


let range = document.querySelector('.range')
let h5 = document.querySelector('h5')

range.addEventListener('input', () =>{
  h5.textContent = range.value
})