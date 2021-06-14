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



///////////////////// вісіліца

const m = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', ]

let a = m[parseInt(Math.random()*10)];
console.log(a)

let v = ["*" ,"*" , "*", "*", "*", "*", "*", "*"]

while(true){
    alert(v)
    let b = prompt('1 символ')
    if(b.length == 1){
        for (let i = 0; i < a.length; i++) {
            if(b == a[i].toLowerCase()){
                console.log(`Правельна буква ${i}`)
                v[i] = b
              
            }
        }
    
    }else{
        console.log('тільки 1 букву')
    }
}