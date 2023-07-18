var select = document.querySelector('select');
var para = document.querySelectorAll('p')

console.log(para);
// para.forEach(e=>{
//     console.log(e.textContent)
// })

// select.onchange = setWeather; // ertaga suraladigan narsa Orzu akadan

select.addEventListener('change', setWeather);

function setWeather() {
    var choice = select.value;
    console.log('slect')

    if (choice === 'sunny') {
        para[0].textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженное.';
    } else if (choice === 'rainy') {
        para[0].textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
    } else if (choice === 'snowing') {
        para[0].textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
    } else if (choice === 'overcast') {
        para[0].textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
    } else {
        para.textContent = '';
    }   
}


// const infoDiv = document.querySelector('.information');
// const select = document.querySelector('select');
// const para = document.querySelector('p');

let info = document.getElementById('info')
console.log(info)

const infoSelect = document.querySelector(".information #info");
const selectElements = document.querySelectorAll(".information select");

infoSelect.onchange = setInformation;
function setInformation() {
    console.log('selectga')
    var choice = infoSelect.value;
    console.log(choice)
    if (choice === 'bozorov') {
        console.log('hello')
        para[1].textContent = 'Bozorov Sherali aka haqidagi malumotni tanlang';
    } else if (choice === 'muxammedov') {
        para[1].textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
    } else if (choice === 'overcast') {
        para[1].textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
    } else {
        para[1].textContent = '';
    }
}



















// if (4 == 9) {
//     console.log('Assalom Buxoro');
// } else {
//     console.log('Buxoro qani');
// }

// const num = 50;

// if (num <49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Daxuya');
// } else {
//     console.log('Yashsha');
// }

// const number = 25;

// (number === 45) ? console.log('xay') : console.log('error');


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         cobsole.log('Neverno yana');
//         break;
//     case 50:
//         console.log('V tochku popal');
//         break;
//     default:
//         console.log('Ne v etot raz');
//         break;
// }


// // Mustaqil ish urganish

// var shoppingDone = false;

// if (shoppingDone === true) {
//     var childsAllowance = 10;
// } else {
//     var childsAllowance = 5;
// }