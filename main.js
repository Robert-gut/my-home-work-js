// ///////////////1

// const abc = (prompt('яке число ви хочете підвисти до степіння?')**2);
// alert('ваше число ' + abc);


// ///////////////2
// const abc1 = prompt('Сер. ариф. введіть 1 число...');
// const abc2 = prompt('Сер. ариф. введіть 2 число...');
// const abc3 = (+abc1 + +abc2) / 2;
// alert('Сер. ариф. з числа ' + abc1 + ' і ' + abc2 + 'буде ' + abc3);

// ////////////////////3

// const abc6 = prompt('яка довжина строни вашого квадрата?');
// const abc7 = +abc6 * +abc6;
// alert('Площа вашого квадрата дорівнює - ' + abc7);

// /////////////////4
// const abc10 = prompt('Яку швидкість ви хочете перевести? ВКАЗУВАТЬ В КМ/ГОД');
// const abc11 = +abc10 * 0.621371;
// alert(abc10 + 'КМ/ГОД = ' + Math.round(abc11) + ' МИЛЬ');

// /////////////////5

// const abc30 = prompt('Калькулятор. введіть 1 число...');
// const abc40 = prompt('Калькулятор. введіть 2 число...');
// const abc50 = (+abc30 + +abc40);
// const abc60 = (+abc30 - +abc40);
// const abc70 = (+abc30 * +abc40);
// const abc80 = (+abc30 / +abc40);
// alert('Калькулятор: ' + '\n' + 'Додавання ' + abc30 +' + '+ abc40 + ' = ' + abc50 + '\n' + 'Віднімання ' + abc30 +' - '+ abc40 + ' = ' + abc60 +'\n' + 'Множення ' + abc30 +' * '+ abc40 + ' = ' + abc70 +'\n' + 'Ділення ' + abc30 +' / '+ abc40 + ' = ' + abc80 );

// //////////6
// const abc100 = prompt('Конвектор валют. ВКАЗУВАТЬ В ДОЛАРАХ!');
// const abc111 = +abc100 * 0.82;
// alert(abc100 + '$ = ' + abc111 + ' ЄВРО');

// //////////7
// const abc1000 = prompt('ВКАЖІТЬ НА СКИЛЬКИ ГБ У ВАС ФЛЕШКА');
// const abc1111 = (+abc1000 * 1024) / 820;
// alert('У ФЛЕШКУ З ' + abc1000 + ' Гб влізе ' + Math.floor(abc1111) + ' файлів по 820 Мб');



// //////////////////////////////11111111111111

// const a = +prompt('назвіть число');
// console.log()
// if (a == 0) {
//     alert(a +' є нульвим числом')
// }  else if(a > 0){
//     alert(a + ' є плюсовим числом')
// } else if (a < 0) {
//     alert(a + ' є мінусовим  числом')
// } else {
//     alert(' не коректні дані')
// }


// ///////////////////////////222222222222

// const b = +prompt('скільки тобі років');

// if (b == 0 || b > 0 && b < 120) {
//     alert('дані коректні')
// } else {
//     alert('дані не коректні')
// }

// //////////////////////////333333

// const c = +prompt('число в модулі');
// alert(Math.abs(c));

// ///////////////////444444444444444

// const d = +prompt('година');
// const i = +prompt('мінута');
// const f = +prompt('секунда');

// if (d < 0 || d > 24) {
//     alert('не коректні дані')
// }else if (i < 0 ||  i > 60) {
//     alert('не коректні дані')
// }else if (f < 0 || f > 60) {
//     alert('не коректні дані')
// } else{
//     alert('коректні дані')
// }
  

// //////////////////////5555

// const x = +prompt('x');
// const y = +prompt('y');

// if (x > 0 && y > 0) {
//     alert(' 1 четверть')
// } else if (x < 0 && y > 0) {
//     alert(' 2 четверть')
// } else if (x > 0 && y < 0) {
//     alert(' 4 четверть')
// } else if (x < 0 && y < 0) {
//     alert(' 3 четверть')
// } else if (x == 0 && y > 0) {
//     alert(' між 1 і 2 четвертю')
// } else if (x == 0 && y < 0) {
//     alert(' між 3 і 4 четвертю')
// } else if (x > 0 && y == 0) {
//     alert(' між 1 і 4 четвертю')
// }else if (x < 0 && y == 0) {
//     alert(' між 2 і 3 четвертю')
// } else if(x == 0 && y == 0){
//     alert('початок кординат')
// } else {
//     alert('не вірні дані')
// }


/////////////// 111111111111111


// const a = +prompt("скільки тобі років");

// if (a == 0 || a > 0 && a < 12) {
//     alert('дитя')
// } else if (a == 12 || a > 12 && a < 18) {
//     alert('підліток')
// }else if (a == 18 || a > 18 && a < 60) {
//     alert('взрослий')
// }else if (a == 60 || a > 60) {
//     alert('старий')
// } else {
//     alert('не коректні дані')
// }

// ////////////////////////222222222222222

// const age = +prompt("ЧИСЛО ВІД 1 ДО 0");

// switch(age){
//     case 4:alert(';');break;
//     case 5:alert('%');break;
//     case 6:alert(':');break;
//     case 7:alert('?');break;
//     case 8:alert('*');break;
//     case 9:alert('(');break;
//     case 0:alert(')');break;
//     case 1:alert('!');break;
//     case 2:alert('"');break;
//     case 3:alert('№');break;
//     default: alert('Error');
// }


// /////////////////////// 3333333333333

// const p = prompt("трьох значне число");
// if (p[0] == p[1] || p[0] == p[2] || p[1] == p[2]) {
//     alert('є подібні цифри')
// } else if (p[0] !== p[1] || p[0] !== p[2] || p[1] !== p[2]) {
//     alert(' нема подібніх цифер')
// } else {
//     alert('не кректні дані')
// }

// /////////////////////////4444444444444

// const s = prompt("чи високоосний рік?");
// switch (s % 4) {
//     case 0: alert('Високосний'); break;
//     case 1: alert('не високосний '); break;
//     case 2: alert('не високосний'); break;
//     case 3: alert('не високосний '); break;
//     default: alert('Error');
// }

// ////////////////////////////////5555555555555555555

// const q = prompt("введіть 5 значне число");
// if (q[0] == q[4] && q[1] == q[3]) {
//     alert('це є палиндромом')
// } else if (q[0] !== q[4] && q[1] !== q[3]) {
//     alert('це є не палиндромом')
// } else {
//     alert('не правельно вказані дані')
// }




////////////////333333333333333333

// const number = +prompt('введіть число')

// for (i = 0; i <= 100; i++){
//     if (i % number == 0) {
//         document.write(`<h4>${number} кратне ${i}</h4>`)
//     }
// }


// ////////////////////4444444444444444

// const a = +prompt('від');
// const b = +prompt('до');

// for (i = a; i < b; i++){
//     i++
//     i++
//     document.write(`<p>${i} кожне 3 в діапазон від ${a} до ${b}</p>`)
// }


////////////////////555555

// const e = +prompt('введіть число');
// let counter = 0
//     for (let i = 2; i < e; i++){
//         if (e % i == 0) counter++;
// }
// let flag = counter == 0 ? true : false;
// console.log(flag);
// if (flag) console.log('просте');
// else console.log('не просте');
        
    





// let counter = 0;
// while (counter < 5) {
//     let name = prompt('input name');
//     counter++;
//     if (name.length < 5) continue;
//     console.log('name')
// }

// let answer;
// do {
//     answer = +prompt('2 + 2 = ?')
// } while (answer != 4);console.log('ok')

// let number = +prompt('how mach?')

// while (number) {
//     document.write(` {number}`)
//     number--
// }


// let number = +prompt('how mach?')
// let number2 = +prompt('how mach2?')

// console.log(number**number2)


// let number1 = +prompt('1?')
// let number2 = +prompt('2?')
// let i = 1;
// while (true) {
//     if (number2 % i == 0 && number1 % i == 0) {
//         console.log(i)
//     }
//     if (number1 == i || number2 == i) break;
//     i++
    
// 

// let n = 1000;
// while (n) {
//     n = n / 2;
//     console.log(n)
//     if (n <= 50) break;
// }


// const num = +prompt('число');
// let a = 50
// while (num) {
//     let b = 50
//     if (a > num) {
//        a 
//    }
// }

//////////////// 1   10.06.21

// let a = +prompt('Діапазон від ')
// let b = +prompt('Діапазон і до ')
// let c = a
// let w = true
// while (w) {
//     c++
//     a = a + c;
//     if (c == b) {
//         alert(a)
//         w = false
//     }
// }

///////////////////// 22222

// let number1 = +prompt('1 num? ')
// let number2 = +prompt('2 num?')
// let i = 1;
// while (true) {
//     if (number2 % i == 0 && number1 % i == 0) {
//         console.log(i)
//     }
//     if (number1 == i || number2 == i) break;
//     i++
// }


//////////////////////3333333

// const q = prompt('к-ть цифер')
// alert('к-ть цифер: ' + q.length)


//////////////////// **********

// let p = prompt('яке число ви хочет здвинуть?')
// let o = prompt('на скільки ви хочете його здвинуть?')

// alert(p.slice(o) + p.slice(0, o));



// ///////////////////// вісіліца

// const m = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', ]

// let a = m[parseInt(Math.random()*10)];
// console.log(a)

// let v = ["*" ,"*" , "*", "*", "*", "*", "*", "*"]
// let clear = true;
// while(clear){
//     alert(v)
//     let spr = 0;
//     let b = prompt('1 символ')
//     if(b.length == 1){
//         for (let i = 0; i < a.length; i++) {
//             if(b == a[i].toLowerCase()){
//                 console.log(`Правельна буква ${i}`)
//                 v[i] = b
              
//             } else {
//                 spr = spr + 1             }
//         }
    
//     }else{
//         console.log('тільки 1 букву')
//     }
//     if (spr > 6) {
//         clear = false;
//     }
// 






/////////////////// 111111111111111111111

// let f = function (a, b) {
//     let c = 0
//     if (a > b) {
//         c = 1
//     } if (a < b) {
//         c = -1;
//     } if (a == b) {
//         c = 0;
//     }
//     return c;
// }

// let a = +prompt('a =');
// let b = +prompt('b =');
// console.log('task 1')
// console.log(f(a, b));




//////////////////////////// 2222222222222222222222
// let factorial = function (number) {
//     let total = 1;
//     for (i = 1; i <= number; ++i){
//         total = total * i;
//     }
//     return total;
// }

// let number = prompt('factorial');
// console.log('task 2')
// console.log(`${number}! =  ${factorial(number)}`);

/////////////////////////////333333333333333333

// let numbers3 = function (z, x, y) {
//     let equal = z + x + y;
//     return Number(equal);
// }

// let
// z = prompt('number 1')
// x = prompt('number 2')
// y = prompt('number 3')
// console.log('task 3')
// console.log(numbers3(z,x,y))





//////////////////                            висилица 





// const words= ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', ]
// let word = words[parseInt(Math.random()*10)];
// alert(word)

// let remainigLetters = word.length;
// let newRemainigLetters = remainigLetters;

// let lives = 6;

// let answer = [];
// for (let i = 0; i < word.length; i++) {
//     answer[i] = '_';
// }


// while ((remainigLetters > 0) && (lives !== 0)) {
//     let letter = prompt('Ввести 1 букву');

//     if (letter.length != 1) {
//         alert('Ввести тільки 1 букву!!!')
//     } else if (letter == null) {
//         alert('Кінець гри')
//     } else {
//         for (i = 0; i < word.length; i++) {
//             if (letter == word[i].toLowerCase()) {
//                 answer[i] = letter;
//                 remainigLetters--;
//                 alert(`${answer.join('')}`);
//             }
//         }
//         if (remainigLetters == newRemainigLetters) {
//             lives--;
//         }
//         newRemainigLetters = remainigLetters;

        
    
//         if (lives == 0) {
//             alert('ви програли!!! :|')
//             // let img = document.body.createElement("IMG");
//             // img.src = "img/1.jpg";
//         } else if (remainigLetters == 0) {
//             alert('ВИ ВИГРАЛИ! Вітаєм!!')
//         }

//     }
// }






//////////////////////////////// dz  21.06

/////////////////////////////// task 111
// let numbers = [2, 4, 5, 6, 9, 7, 10, 15, 18, 22];

// let task1 = (numbers) => {
//     document.write(`<h1 style = "color: blue">'task 1' :${numbers}</h1>`);
// }

// task1(numbers);

// ////////////////////////////// task 222

// let task2 = (numbers) => {
//     for (i = 0; i < 10; i++){
//         if (numbers[i] % 2 == 0) {
//             document.write(`<h1 style = "color: red">task 2 : ${numbers[i]}</h1>`)
//         }
//     }
// }

// task2(numbers);

// ////////////////////////////// task 333

// let task3 = (numbers) => {
//     let sum = 0;
//     for (i = 0; i < 10; i++){
//         sum = sum + numbers[i]
//     }
//     document.write(`<h1 style = "color: green">task 3 : ${sum}</h1>`)
// }

// task3(numbers);

// ////////////////////////////// task 444

// let task4 = (numbers) => {
//     let max = 0;
//     for (i = 0; i < 10; i++){
//         if(numbers[i] > max) max = numbers[i]
//     }
//     document.write(`<h1 style = "color: yellow">task 4 : max ${max}</h1>`)
// }

// task4(numbers);

// //////////////////////////////////// task 555

// let index = +prompt('input index (куда добавить)');
// let item = +prompt('input item(яку цифру добавить)');
    
// let task5 = (index,item) => {
//     document.write(`<h1 style = "color: yellow">task 5 : ${numbers}</h1>`)
//     numbers.splice( index, 0, item );;
//     document.write(`<h1 style = "color: purple">task 5 : ${numbers}</h1>`)
// }

// task5(index, item);


// //////////////////////////////////////////// task 666
// let deleteIndex = +prompt('input index (delete!)' );

    
// let task6 = (index) => {
//     numbers.splice(index, 1)
//     document.write(`<h1 style = "color: brown">task 6 : ${numbers}</h1>`)
// }

// task6(deleteIndex);


// let p = document.querySelector('p')

// let $btn1 = document.querySelector('#btn1');
// let $btn2 = document.querySelector('#btn2');
// let $btn3 = document.querySelector('#btn3');
// let $btn4 = document.querySelector('#btn4');

// $btn1.onclick = () => {
//     p.style.color = '#41544b';
//     p.style.width = '600px'
//     p.style.fontSize = '18px'
//     p.style.margin = '50px auto'
//     p.style.backgroundColor = '#f1fff2'
//     p.style.padding = '10px'
//     p.style.border = 'solid 3px  #595f7d'
//     p.style.borderRadius = '5px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
//     $btn1.style.backgroundColor = 'red'
//     $btn1.style.borderRadius = '9px'
// }

// $btn2.onclick = () => {
//     p.style.color = '#26143d';
//     p.style.width = '850px'
//     p.style.fontSize = '15px'
//     p.style.margin = '50px 20px  50px auto'
//     p.style.backgroundColor = '#ffe5e1'
//     p.style.padding = '10px'
//     p.style.border = 'dashed 8px  #4b3a91'
//     p.style.borderRadius = '5px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
//     $btn2.style.backgroundColor = 'red'
//     $btn2.style.borderRadius = '9px'
// }


// $btn3.onclick = () => {
//     p.style.color = '#2b3f3d';
//     p.style.width = '750px'
//     p.style.fontSize = '18px'
//     p.style.margin = '50px 90px  50px auto'
//     p.style.backgroundColor = '#d3d3d3'
//     p.style.padding = '30px'
//     p.style.border = 'dashed 10px  #696969'
//     p.style.borderRadius = '3px 30px 30px 3px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
//     $btn3.style.backgroundColor = 'red'
//     $btn3.style.borderRadius = '9px'
// }

// $btn4.onclick = () => {
//     p.style.color = '#22aeec';
//     p.style.width = '450px'
//     p.style.fontSize = '15px'
//     p.style.margin = '40px 100px  40px auto'
//     p.style.backgroundColor = '#483d8b'
//     p.style.padding = '10px'
//     p.style.border = '15px'
//     p.style.borderColor = '#181971  #05061a  #05061a #181971'
//     p.style.borderStyle = 'solid'
//     p.style.borderRadius = '3px 25px 25px 3px'
//     p.style.fontStyle = 'italic'
//     p.style.fontWeight = '600'
//     $btn4.style.backgroundColor = 'red'
//     $btn4.style.borderRadius = '9px'
// }



//////////////////////////// галірея


// let foto = document.querySelectorAll('img');

// for (let i = 0; i < foto.length; i++) {
//     foto[i].addEventListener('mouseenter', ()=>{
//         foto[i].style.transition = '1s';
//         foto[i].style.transform = 'scale(1.4)';
//     })
    
// }
// for (let i = 0; i < foto.length; i++) {
//     foto[i].addEventListener('mouseleave', ()=>{
//         foto[i].style.transition = '0.5s';
//         foto[i].style.transform = 'none';
//     })
    
// }



//////////////////////////// 5 vscwm

// let li = document.querySelectorAll('li');
// let p = document.querySelector('p');
// let img = document.querySelector('img');

// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener('click', ()=>{
//         if (i == 0) {
//             for (let i = 0; i < li.length; i++) {
//                 li[i].style.color = 'black'
//             }
//             li[i].style.color = 'red'
//             img.src = "img/1.jpg";
//             p.textContent = 'місце 1'

//         }
//         if (i == 1) {
//             for (let i = 0; i < li.length; i++) {
//                 li[i].style.color = 'black'
//             }
//             li[i].style.color = 'red'
//             img.src = "img/2.jpg";
//             p.textContent = 'місце 2'

//         }
//         if (i == 2) {
//             for (let i = 0; i < li.length; i++) {
//                 li[i].style.color = 'black'
//             }
//             li[i].style.color = 'red'
//             img.src = "img/3.jpg";
//             p.textContent = 'місце 3'
//         }
//         if (i == 3) {
//             for (let i = 0; i < li.length; i++) {
//                 li[i].style.color = 'black'
//             }
//             li[i].style.color = 'red'
//             img.src = "img/4.jpg";
//             p.textContent = 'місце 4'
//         }
//         if (i == 4) {
//             for (let i = 0; i < li.length; i++) {
//                 li[i].style.color = 'black'
//             }
//             li[i].style.color = 'red'
//             img.src = "img/5.jpg";
//             p.textContent = 'місце 5'
//         }
//     })
    
// }



// // task 111

// let random_button = document.querySelector('.task1 button')
// let resolt = document.querySelector('.task1 h2')

// random_button.addEventListener('click', () => {
//     resolt.innerHTML = Math.round(Math.random() * 100)
// })


// // task2

// let dom = document.querySelector('body').onmousemove
// let maus = document.querySelector('.task2 p')
// document.querySelector('body').onmousemove = function(event) {
//     document.querySelector('.x').innerHTML = 'X = ' + event.offsetX;
//     document.querySelector('.y').innerHTML = 'Y = ' + event.offsetY;
//     if(event.which == 1) {
//         maus.innerHTML = 'ЛКМ'
//     }if (event.which == 3) {
//         maus.innerHTML = 'ПКМ'
//     }
// }


// // task3

// let but_h_s = document.querySelector('.task3 button');
// let color_text = document.querySelector('.task3 p');
// console.log(color_text.style.color)
// but_h_s.addEventListener('click', () => {
//     if (color_text.style.color == 'black') {
//         color_text.style.color = 'burlywood'
//     } else {
//         color_text.style.color = 'black'
//     }
// })

// // task4

// let butt3 = document.querySelectorAll('.task4 button');
// let text = document.querySelector('.task4 p')

// butt3[0].addEventListener('click', () => {
//     text.innerHTML = 'HTML Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi, possimus alias quae quos autem velit animi! Eveniet, illum? Eius, provident omnis nobis quae doloremque impedit praesentium molestiae deleniti debitis.'
// })
// butt3[1].addEventListener('click', () => {
//     text.innerHTML = 'CSS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi, possimus alias quae quos autem velit animi! Eveniet, illum? Eius, provident omnis nobis quae doloremque impedit praesentium molestiae deleniti debitis.'
// })
// butt3[2].addEventListener('click', () => {
//     text.innerHTML = 'JS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi, possimus alias quae quos autem velit animi! Eveniet, illum? Eius, provident omnis nobis quae doloremque impedit praesentium molestiae deleniti debitis.'
// })


// // task5

// let knopka = document.querySelectorAll('.task5 button');
// let block = document.querySelectorAll('.task5 div')

// for (let i = 0; i < knopka.length; i++) {
//     knopka[i].addEventListener('click', () => {
//         block[i].remove()
//     })   
// }


// // task6

// let percent = document.querySelector('.task6 button')
// let progress = 0
// let progressAll = document.querySelector('.task6 .progress .progressAll')

// percent.addEventListener('click', () => {
//     progress = progress + 5;
//     if (progress > 100) {
//         progress = 0
//     }
//     progressAll.style.width = `${progress}%`
//     progressAll.innerHTML = `${progress}%`;
// })






// task menu


// let main = document.querySelectorAll('.main')
// let other = document.querySelectorAll('.other')
// let left_st = document.querySelectorAll('.left_st')


// main[0].addEventListener('click', () => {
//     let displayValue = window.getComputedStyle(other[0]).display;
//     if (displayValue === "none") {
//         other[0].style.display = 'block'  
//         other[1].style.display = 'block'
//         left_st[0].style.transform = 'rotate(180deg)'
//     } else {
//         other[0].style.display = 'none'  
//         other[1].style.display = 'none'
//         left_st[0].style.transform = 'rotate(0deg)'
//     }
// })  
// main[1].addEventListener('click', () => {
//     let displayValue = window.getComputedStyle(other[2]).display;
//     if (displayValue === "none") {
//         other[2].style.display = 'block'  
//         other[3].style.display = 'block'
//         other[4].style.display = 'block'
//         left_st[1].style.transform = 'rotate(180deg)'
//     } else {
//         other[2].style.display = 'none'  
//         other[3].style.display = 'none'
//         other[4].style.display = 'none'
//         left_st[1].style.transform = 'rotate(0deg)'
//     }  
// })
// main[2].addEventListener('click', () => {
//     let displayValue = window.getComputedStyle(other[5]).display;
//     if (displayValue === "none") {
//         other[5].style.display = 'block'  
//         other[6].style.display = 'block'
//         other[7].style.display = 'block'
//         left_st[2].style.transform = 'rotate(180deg)'
//     } else {
//         other[5].style.display = 'none'  
//         other[6].style.display = 'none'
//         other[7].style.display = 'none'
//         left_st[2].style.transform = 'rotate(0deg)'
//     }    
// })

// other[5].addEventListener('click', () => {
//     document.querySelector('.p1').style.display = 'block'
//     document.body.style.backgroundColor = '#191919'
//     document.querySelector('ul').style.display = 'none'
// })
// other[6].addEventListener('click', () => {
//     document.querySelector('.p2').style.display = 'block'
//     document.body.style.backgroundColor = '#191919'
//     document.querySelector('ul').style.display = 'none'
// })
// other[7].addEventListener('click', () => {
//     document.querySelector('.p3').style.display = 'block'
//     document.body.style.backgroundColor = '#191919'
//     document.querySelector('ul').style.display = 'none'
// })


// document.querySelector('.p1').addEventListener('click', () => {
//     let displayValue = window.getComputedStyle(document.querySelector('.p1')).display;
//         if (displayValue === "block"){
//             document.querySelector('.p1').style.display = 'none'
//             document.body.style.backgroundColor = '#fff'
//             document.querySelector('ul').style.display = 'block'
//         }
// })
// document.querySelector('.p2').addEventListener('click', () => {
//     let displayValue = window.getComputedStyle(document.querySelector('.p2')).display;
//         if (displayValue === "block"){
//             document.querySelector('.p2').style.display = 'none'
//             document.body.style.backgroundColor = '#fff'
//             document.querySelector('ul').style.display = 'block'
//         }
// })
// document.querySelector('.p3').addEventListener('click', () => {
//     let displayValue = window.getComputedStyle(document.querySelector('.p3')).display;
//         if (displayValue === "block"){
//             document.querySelector('.p3').style.display = 'none'
//             document.body.style.backgroundColor = '#fff'
//             document.querySelector('ul').style.display = 'block'
//         }
// })
    




// ігра

// let $box = document.querySelector('div');


// let getRandom = (min, max) => {
//     return Math.random() * (max - min) + min;
// }
// let move = () => {
//     let maxTop = window.innerHeight - 150;
//     let maxLeft = window.innerWidth - 150;
//     $box.style.top = getRandom(0, maxTop) + 'px';
//     $box.style.top = getRandom(0, maxLeft) + 'px';
// }
// let interval = setInterval('move()', 500)
// $box.addEventListener('click', () => {
//     clearInterval(interval)
// })


// let $box = document.querySelector('div');

// let $error = document.createElement('div')


// $error.innerHTML = `<h1>Error!!!</h1> <button> Pay </button>`
// let show = () => {
//     $error.className = 'error'
//     document.body.prepend($error)
//     let btn = $error.querySelector('button')
//     setTimeout(() => {
//         $error.style.height = '100vh'
//         btn.addEventListener('click', () => {
//             $error.style.height = '0vh'
//             setTimeout(() => {
//                 $error.remove();
//             },2000)
//         })
//     },200)
// }

// setTimeout('show()',3000)



// let $start = document.querySelector('#start')
// let $game = document.querySelector('#game')
// let $time_header = document.querySelector('#time-header')
// let $result_header = document.querySelector('#result-header')
// let $time = document.querySelector('#time')
// let $result = document.querySelector('#result')
// let $game_time = document.querySelector('#game-time')

// let score = 0
// let asTime = true


// $start.addEventListener('click',startGame)
// $game.addEventListener('click', ckickHandleBox)
// $game_time.addEventListener('input',time)

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
    
// }


// let renderBox = () => {
//     $game.innerHTML = ''
//     let box = document.createElement('div')
//     let size = getRandom(50, 125)
//     let maxTop = $game.getBoundingClientRect().height - size;
//     let maxLeft = $game.getBoundingClientRect().width - size;
//     box.style.width = box.style.height = size + 'px'
//     // box.style.background = '#000'
//     box.style.position = 'absolute'
//     box.style.cursor = 'pointer'
//     box.style.top = getRandom(0,maxTop) + 'px'
//     box.style.left = getRandom(0, maxLeft) + 'px'
//     box.setAttribute('data-box','box')
//     $game.insertAdjacentElement('afterbegin', box)
//     box.style.background = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

// }
// function time(){
//     let tm = parseFloat($game_time.value) 
//     $time.textContent = tm.toFixed(1)
// }
// function ckickHandleBox(event) {
    
//     if (event.target.dataset.box) {
//         score++
//         renderBox()
        
//     }
// }

// function startGame() {
//     score = 0
//     $time_header.classList.remove('hide')
//     $result_header.classList.add('hide')
//     $start.classList.add('hide')
//     $game.style.background = '#fff'
//     $game_time.setAttribute('disabled',true)
//     renderBox()
//     let interval = setInterval(() => {
//         let time = parseFloat($time.textContent).toFixed(1)
//         if (time == 0) {
//             $time.textContent = 5
//         }
//         if (time > 0) {
//             time -= 0.1
//             $time.textContent = time.toFixed(1)
//         } else {
//             isTime = false
//             clearInterval(interval)
//             endGame()
//         }
//     }, 100);
// }
// function endGame() {
//     $game.innerHTML = ''
//     $start.classList.remove('hide')
//     $game.style.background = '#ccc'
//     $game_time.removeAttribute('disabled')
//     $time_header.classList.add('hide')
//     $result_header.classList.remove('hide')
//     $result.textContent = score
// }





// task1

// let car = {
//     brand: 'wv',
//     model: 'passat',
//     year: 2008,
//     speed: 130
// }

// let info = ()=>{
//     let p = document.querySelector('p')
//     p.innerHTML = `Brand: ${car.brand} <br> Model: ${car.model} <br> Year: ${car.year} <br> Speed: ${car.speed}`
// }
// info()

// let time = (km) => {
//     let c =  (km / (car.speed / 60)) / 60;
//     let d = 60 * (Math.floor(c) - c)
//     let h = Math.floor((Math.floor(c) / 4)) + Math.floor(c)
//     console.log(Math.abs(Math.floor(d)))
//     console.log(h)
//     let h3 = document.querySelector('h3')
//     h3.innerHTML = `${km} км. ви проїдете за ${h} год. ${Math.abs(Math.floor(d))} хв. з ${Math.floor((Math.floor(c) / 4))} зуп. по 1 год`
// }

// time(prompt('Скільки км вам треба проїхати?'))



// // task2

// let newTime = document.querySelector('h1')

// let date = () => {
//     return new Date().toTimeString().replace(/ .*/, '')
// } 
// newTime.innerHTML = date()
// setInterval(() => {
//     newTime.innerHTML = date()
// }, 1000);
// let btn = document.querySelectorAll('button')
// let input = document.querySelector('input')
// let time1 = document.querySelector('.time')
// let d = new Date()
// let h, m, s;
// h = d.getHours()
// m = d.getMinutes()
// s = d.getSeconds()

// btn[0].addEventListener('click', () => {
//     for (let i = 0; i < input.value; i++) {
//         h++
//         if (h == 24) {
//             h = 0
//         }
//         time1.innerHTML = `${h}:${m}:${s}`
//     }
// })
// btn[1].addEventListener('click', () => {
//     for (let i = 0; i < input.value; i++) {
//         m++
//         if (m == 60) {
//             h++
//             if (h == 24) {
//                 h = 0
//             }
//             m = 0
//         }
//         time1.innerHTML = `${h}:${m}:${s}`
//     }
// })
// btn[2].addEventListener('click', () => {
//     for (let i = 0; i < input.value; i++) {
//         s++
//         if (s == 60) {
//             m++
//             s = 0
//             if (m == 60) {
//                 h++
//                 m = 0
//                 if (h == 24) {
//                     h = 0
//                 }
//             }
//         }
//         time1.innerHTML = `${h}:${m}:${s}`
//     }
// })

