// lab 7

// 1 задание
console.log('задание 1');
function countSandwiches(input) {
    let bread = Math.floor(input.bread / 2)
    console.log(Math.min(bread, input.cheese));
}

countSandwiches({ bread: 5, cheese: 6 })

// 2 задание 
console.log('задание 2');
function generateMultiplicationTable(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        let line = []
        for (let j = 1; j <= n; j++) {
            line[j] = i * j
        }
        arr[i] = line
    }
    console.table(arr);
}

generateMultiplicationTable(7)

// 3 задание
console.log('задание 3');
function showQuote(arr, s) {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        n = Math.max(n, arr[i].length)
    }


    let ans = s.repeat(n + 4) + '\n'
    for (let i = 0; i < arr.length; i++) {
        line = s + ' ' + arr[i] + ' '.repeat(n - arr[i].length + 1) + s + '\n'
        ans += line
    }
    ans += s.repeat(n + 4) + '\n'

    console.log(ans);
}

showQuote(['Hello', 'World', 'In', 'JS'], '#')

// 4 задание 
console.log('задание 4');
function combineArrays(a, b) {
    n = Math.max(a.length, b.length)
    let arr = []
    for (let i = 0; i < n; i++) {
        a[i] != undefined ? arr.push(a[i]) : false
        b[i] != undefined ? arr.push(b[i]) : false
    }
    console.log(arr);
}

combineArrays([1, 2, 3, 4, 5], ['a', 'b']);

// 5 задание 
console.log('задание 5');
function countUniqueValues(arr) {
    let values = {};
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        values[a] = (values[a] || 0) + 1
    }
    return values
}

console.table(countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5]));

// 6 задание
function openBurger(e) {
    const menu = document.getElementsByClassName('nav__container-items')[0];
    const burger = document.getElementsByClassName('nav__icon--menu')[0];
    let img = burger.querySelector('img');

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        img.setAttribute('src', 'img/burger.svg');
    }
    else {
        menu.style.display = 'block'
        img.setAttribute('src', 'img/close.svg');
    }
}

const burger = document.getElementsByClassName('nav__icon--menu')[0];
burger.addEventListener('click', openBurger)

// 7 задание
const notification = document.querySelector('.alert');
const closeBtn = document.querySelector('.alert__close');
const content = document.querySelector('.alert__content');

const user = {
    name: 'Антон',
    comment: 'хорошего дня!'
}
content.innerText = user.name + ', ' + user.comment

function showNotification() {
    notification.classList.add('show');
}
showNotification()

function hideNotification() {
    notification.classList.remove('show');
    notification.classList.add('hidden');
}

closeBtn.addEventListener('click', hideNotification);
