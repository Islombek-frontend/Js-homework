// let select = s => document.querySelector(s),
// 		toArray = s => gsap.utils.toArray(s),
// 		mainSVG = select('#mainSVG'),
//     allLines = toArray('#logoWrapper .logo')
		
// function setCharColor (char, col) {
// 	gsap.set(char, {
// 		color: col
// 	})
// }

// allLines.forEach((c, i) => {
//   let myST = new SplitText(c, {type: 'words,chars'});
//   gsap.set(c, {
//     color: i < allLines.length/2 ? '#0054B1' : '#F7D000'
//   });
//   let tl = gsap.timeline();
//   let duration = 1.12;
//   tl.to(myST.chars, {
//     duration: duration,
//     '--wght': 120,
//     '--wdth': 10,
//     y: '+=30',
//     opacity: 0.6,
//     stagger: {
//       amount: duration * 1.75,
//       repeat: -1,
//       yoyo: true
//     },
//     ease: 'sine.inOut'
//   }).seek(1000)
// })










// let week = prompt(' HAFTA KUNINI YOZING ')
// switch (week)
// {
//      case 'MONDAY':
//         console.log('TUESDAY');
//         break;
//      case 'TUESDAY':
//         console.log('WEDNESDAY')
//         break;
//     case 'WEDNESDAY':
//         console.log('THURSDAY');
//         break;
//     case 'THURSDAY':
//         console.log('FRIDAY');
//         break;
//     case 'FRIDAY':
//         console.log('SATURDAY');
//         break;
//     case 'SATURDAY':
//         console.log('SUNDAY');
//         break;
//     case 'SUNDAY':
//         console.log('MONDAY');
//         break;
// }
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

1) numberOfFilms o'zgaruvchisini yarating va undagi (— Qancha film ko'rgansiz?) savoliga foydalanuvchining javobini saqlang

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

2) personalMovieDB ob'ektini yarating va unga quyidagi keylarni qo'ying:
    - count - birinchi savolga javob shu erda saqlanadi
    - movies - bu keyda bo'sh ob'ektni saqlang
    - actors - bu keyda bo'sh ob'ektni saqlang
    - genres - bu erda bo'sh massiv saqlanadi
    - privat - bu key o'zida boolean qiymatini false saqlaydi

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли 

3) Foydalanuvchiga ikkita savol bering:
    - "Oxirgi ko'rgan filmlaringizdan biri?"
    - "Uni qancha baholagan bo'lardingiz?"
Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak
personalMovieDB.movies ga javoblarni quyidagi formatda yozing:
    movies: {
        'logan': '8.1'
    }

Konsolda hamma narsa xatosiz ishlashini tekshiring */

// let numberofFilms = +prompt(`Qancha film ko'rgansiz?`)
// let filmGenres = prompt(`Siz tez-tez qanday film ko'rasiz?`)
// let actorsFilm = prompt(`Sizning sevimli aktyoringiz kim?`)
// let personalMovieDB = {
//     count:numberofFilms,
//     movies:{},
//     actors:actorsFilm,
//     genres:filmGenres,
//     privat:''
// }
// for(let i = 0; i < 2; i++){
//     let firstQ = prompt(`Oxirgi ko'rgan filmlaringizdan biri?`);
//     let secondQ = prompt(`Uni qancha baholagan bo'lardingiz?`);

//     if (firstQ == '' || firstQ == null || secondQ =='' || secondQ == null){
//         --i;
//     }else{
//         personalMovieDB.movies[firstQ] = secondQ
//     }
// }
// if(personalMovieDB.count < 10 ){
//     console.log(`Ko'rilgan filmlar soni kam`);
// }else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
//     console.log('Siz klassik tomoshabinsiz');
// }else if (personalMovieDB.count >= 30){
//     console.log('Siz kino ishqibozisiz');
// }else{
//     console.log('Xatolik yuz berdi');
// }
// console.log(personalMovieDB);\




// let getNumber = function(from){
//     for (let i = 0; i < from; i++) {
//         if(from <=  50){
//             console.log(i);
//         }else{
//             console.log('error');
//         }
//     }
// }
// getNumber(50)



// let nums = [9,9,7]

// let getSum = function(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i]%2!==0){
//        sum += arr[i]
//     }else{
//         return 'error'
//     }
//     }
//     return sum
// }

// let num = getSum(nums)
// console.log(num);

// let getRandomNumber = function(from,to){
//    console.log(Math.floor(Math.random() * (to - from + 1))+ from)
// }

// getRandomNumber(50, 100);


// let name = "Islombek";
// let x = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   x += name[i];
// }
// console.log(x);

// function showNumber(x){
//     for (let i = x; i >= 0; i--) {
//         console.log(i);
//        }
// }
// showNumber(26)

// function encodeString(x) {
//     let newStr = "";
//     for (let i = 0; i < x.length; i++) {
//     if (x[i] === "u" || x[i] === "o" || x[i] === "i" || x[i] === "a" || x[i] === "o'") {
//         newStr += "$";
//     } else {
//         newStr += x[i];
//     }
//     }
//     return newStr;
//     }
//     console.log(encodeString('waw'))


// function snakeCaseToKebabCase(x){
//     let newStr = x.split('-');
//     return (newStr.join('_'));
// }
// snakeCaseToKebabCase('islom-siroj');

// function toCapitalize(x) {
//     let newStr = x.split(' ');
//     for (let i = 0; i < newStr.length; i++) {
//       let firstLetter = newStr[i].slice(0,1).toUpperCase();
//       newStr[i] = firstLetter + newStr[i].slice(1).toLowerCase();
//     }

//     return newStr.join(' ');
//   }
  
//   console.log(toCapitalize('islobek siroj')); // "Islombek Siroj"

// //toCapitalize

// function toCapitalize(x) {
//     let newStr = x.split('-'); 
//     for (let i = 0; i < newStr.length; i++) {
//       let firstLetter = newStr[i].charAt(0).toUpperCase();
//       newStr[i] = firstLetter + newStr[i].slice(1);
//     }
    
//     return newStr.join('');
//   }
  
//   console.log(toCapitalize('islombek-siroj'))
  
//   // Expected output: "islombekSiroj"
  
//   function snakeCaseToCamelCase(x) {
//     let arr = x.split("-");
//     for (let i = 1; i < arr.length; i++) {
//       arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
//     }
//     let newStr = arr.join("");
//     return newStr;
//   }
//   alert (snakeCaseToCamelCase("islombek-siroj"))
  
//   //kebabCaseToCamelCase
  
//   function snakeCaseToCamelCase(x) {
//     let arr = x.split("_");
//     for (let i = 1; i < arr.length; i++) {
//       arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
//     }
//     let newStr = arr.join("");
//     return newStr;
//   }
  
//   console.log(snakeCaseToCamelCase("islombek_siroj"));


// function getStatusStr(x){
//     if(x.startsWith('u')|| x.startsWith('i') || x.startsWith('o`') || x.startsWith('a') 
// || x.startsWith('e') || x.startsWith('o')  
//      ){
//         return true
//      }else{
//         return false
//      }
// }
// console.log(getStatusStr('open web academy'))


// function sliceText(string, count) {
//     if (count === 0) {
//       console.log('" " ');
//     } else if (count === 3 || count === 2 || count === 1) {
//       console.log(string.slice(0, count));
//     }else if(count === 4) {
//         console.log(string.slice(0, 1) + '...');
//     }
//     else {
//       console.log(string.slice(0, 5) + '...');
//     }
//   }
  
//   sliceText('Hello world', 8); // output: Hello...
//   sliceText('Debug', 3); // output: Deb
//   sliceText('Debug', 2); // output: Deb
//   sliceText('Debug', 1); // output: Deb
//   sliceText('Debug', 0); // output:  
//   sliceText('Debug', 4); // output: D...

//   function getCardNumber(x) {
//     if(x.length !== 16  || isNaN(x)){
//       console.log('Bu karta xato kiritildi');
//     }else{
//       console.log(`${x.slice(0,4)} **** **** ${x.slice(12)}`);
//     }

//     if(x.startsWith('8600')){
//       console.log('Bu UzCard');
//     }else if(x.startsWith('9860')){
//       console.log('Bu karta Khumo');
//     }
// }
// getCardNumber("9860096099870999");     


// let countries = ["Monaco","Grenada","Romania","Malaysia","Chile","Marshall Islands",
// "Burkina Faso","Malawi","Kuwait","Iceland","Bahamas","Sao Tome and Principe","Serbia",
// "Vincent","Portugal","Syria","India","Tajikistan","Angola","Rwanda","Fiji","Costa Rica",
// "Mauritius","Estonia","Saudi Arabia","Mexico","Afghanistan","Brunei","Vietnam","Nigeria",
// "China","Guatemala","Croatia","Netherlands","Benin","Madagascar",
//   ]

// function selectCountries(arr, number) {
//     let smallerCountries = [];
//     let biggestCountries = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length === number) {
//         smallerCountries.push(arr[i]);
//          }else
//         biggestCountries.push(arr[i])
//       }
//       console.log(smallerCountries, biggestCountries);
//     }
  
//   selectCountries(countries, 5);

//  let numbers = [1 ,8 , 0 , 9 , -4,  2, -66, 89, -54]
//  let alphabets = ['a', 'w', 'i', 'e' , 't', 'o', 'p']

//  let combinedArr = [];

//  numbers.forEach(function(input[i]){combinedArr.push(input[i])});
//  alphabets.forEach(function(input[i]){combinedArr.push(input[i])});
 
//  console.log(combinedArr);

// let numbers = [1 , 8 , 0 , 9 , -4, 2, -66, 89, -54]

// function getRandomItem(arr){
//     let random = Math.floor(Math.random() * arr.length)
//     return arr[random]
// }
// console.log(getRandomItem(numbers));

// let numbers = [1 , 8 , 0 , 9 , -4, 2, -66, 89, -54]

// function sliceArray(arr, count){
//     let resultArray = [];
//     arr.forEach(function(num, index){if(index % count === 0){
//        resultArray.push([num]);
//     }
// });
// return resultArray;
// }

// console.log(sliceArray(numbers, 3)); 
// let numbers = [1 , 8 , 0 , 9 , -4, 2, -66, 89, -54];

// function sliceArray(arr, count){
//   let resultArray = [];
//   arr.forEach(function(num, index){ if(index % count === 0){
//       resultArray.push([num]);
//     } else {
//       resultArray[resultArray.length - 1].push(num);
//     }
//   });
//   return resultArray;
// }

// console.log(sliceArray(numbers, 3)); // [ [1, 8, 0], [9, -4, 2], [-66, 89, -54] ]// [ [1, 8, 0], [9, -4, 2], [-66, 89, -54] ]// [[1, 8, 0], [9, -4, 2], [-66, 89, -54]]

// let numbers = [1 , 8 , 0 , 9 , -4, 2, -66, 89, -54]

// function removeItem(arr, input[i]){
//    if(arr.indexOf(input[i])){
//    return arr.filter(num => num !== input[i]);
//    } else {
//    return arr;
//    }
//    }
   
//    console.log(removeItem(numbers, 8)); // [1, 0, -4, 2, -66, 89, -54]



// function uefaEuro2016(teams, scores){
//   if(scores[0] > scores[1]){
//     return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//   }else if(scores[0] < scores[1]){
//     return `At match ${teams[1]} - ${teams[0]}, ${teams[1]} won!`
//   }else{
//     return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//   }
// }
// alert(uefaEuro2016(['Belgium','Italy'], [6, 9] ))


// function findMultiples(integer, limit) {
//     let result = [];
//     for (let i = integer; i <= limit; i++) {
//         if (i % integer === 0) {
//             result.push(i);
//         }
//     }
//     return result;
//  }

// alert(findMultiples(5, 25))


// function positiveSum(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result += arr[i];
//         }
//     }
//     return result
  
// }


// function isPalindrome(x) {
//     x = x.toLowerCase()
//     let res = '';
//     for (let i = 0; i < x.length; i++){
//         res = x[i] +=  res 
//     } 
//    if(res == x){
//       return true
//    }else{
//       return false
//    }
// }
//   alert(isPalindrome('ba'));

// function countPositivesSumNegatives(input) {
//     if (input || input.length == 0){
//       return []
//     }
//       let countPositivies = []
//       let sumPositives = []
//       for(let i = 0; i < input; i++){
//           if(input[i] > 0){
//             countPositivies.push(input[i]);
//           } else{
//             sumPositives.push(input[i])
//           }
//       }
//       return [countPositivies, sumPositives]
//   }
// alert(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
	


// function countPositivesSumNegatives(input) {
//     let positiveNum = 0
//     let negativeNum = 0
//     let result = []
    
//     if(input == null || input.length == 0){
//       return []
//     }
    
//     for(let i = 0; i < input.length; i++){
//       if(input[i] > 0){
//         positiveNum++
//       }
//       else if(input[i] < 0){
//         negativeNum += input[i]
//       }
//     }
    
//     result.push(positiveNum)
    
//     if(negativeNum !== 0){
//       result.push(negativeNum)
//     }else{
//       result.push(0)
//     }
    
//     return result
//   }


// function countSheeps(arrayOfSheep) {
//     let sheepCount = 0;
//     let sheepSumNegative = 0;
//     for(let i = 0; i < arrayOfSheep.length; i++){
//         if(arrayOfSheep[i] == 'true'){
//             sheepCount++;      
//         }else{
//             sheepSumNegative += arrayOfSheep[i];
//         }
//     }
//     return [sheepSumNegative]
//   }
//   alert (countSheeps([true,  true,  true, true, true, false,]))


// function feast(beast, dish) {
//     if(beast[0]== dish[0]&&[beast.length] ==dish[dish.length]){
//       return true
//     }else{
//       return false
//     }
//   }




// let arr = [2, 3, 4, 3, , 3, 4, 4, , 5, 6, 7, 7, , 95, , 95];
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
// if (for (let j = i + 1; j < arr.length; j++){}arr[i] === arr[j] && !arr2.includes(arr[i])) {
// arr2.push(arr[i]);
// }
// }


// alert(arr2); // [3, 4, 7, 95]



















// // Takrorlanadigan sonlar yig'indisi

// let arr = [2,3,4,3,3,4,4,5,6,7,7,95,95];
//  let arr2 = [];
//  for (let i = 0; i < arr.length; i++) {
//     for(let num = i + 1; num < arr.length; num++){
//         if(arr[i] === arr[num] && !arr2.includes(arr[i])){
//             arr2.push(arr[i])
//         }
//     }
//  }
//     alert(arr2)


// //arrni yig'indisi

// let arr = [2,3,4,4,6,9]

// let num = 0

// arr.forEach(function(item){
//     num += item
// })
// alert(num)

// //manfiy sonlar yig'indisi

// let arr = [2,-3,-4,4,-6,9]

// let num = 0

// arr.forEach(function(item){
//     if(item < 0){
//        num += item * -1
//     }
// })
// alert(num)




function reverse(a) {
    let str = [];
    for(let i = 0; i < a.length; i++) {
    if(a[i] === a[i].toLowerCase()){
    str.push(a[i].toUpperCase());
    } else if(a[i] === a[i].toUpperCase()){
    str.push(a[i].toLowerCase());
    } else {
    str.push(a[i]);
    }
    }
    return str.join('');
    }
    alert(reverse("hello world"))