//1
let num = prompt("Введіть тризначне число:");
if (!num || isNaN(num) || +num < 100 || +num > 999) {
    alert("Потрібно ввести тризначне число (100–999)");
} else {
    let str = num.toString();
    let digits = [str[0], str[1], str[2]];
    
    if (digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2]) {
        alert("Є однакові цифри");
    } else {
        alert("Усі цифри різні");
    }
}
//2
let year = +prompt("Введіть рік:");

if (!year || year < 1) {
    alert("Введіть коректний рік");
} else {
    let leap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
    alert(leap ? "Високосний" : "Не високосний");
}
//3
const rates = {
    EUR: 0.84, 
    UAH: 43,
    AZN: 1.70
};

let usd = +prompt("Сума в USD:");
let cur = prompt("Валюта (EUR / UAH / AZN)?").toUpperCase().trim();

if (isNaN(usd) || usd < 0) {
    alert("Некоректна сума");
} else if (!rates[cur]) {
    alert("Невідома валюта");
} else {
    let result = usd * rates[cur];
    alert(`${usd}$ → ${result.toFixed(2)} ${cur}`);
}
//4
let points = 0;

if (prompt("Найближча до Сонця планета?\n1) Венера  2) Меркурій  3) Марс") === "2") points += 2;
if (prompt("8 × 7 = ?\n1) 54  2) 56  3) 64") === "2") points += 2;
if (prompt("Столиця Японії?\n1) Сеул  2) Токіо  3) Пекін") === "2") points += 2;

alert(`Результат: ${points} балів з 6`);
//5
let d = +prompt("День:");
let m = +prompt("Місяць:");
let y = +prompt("Рік:");

if (isNaN(d+m+y) || d<1 || d>31 || m<1 || m>12 || y<1) {
    alert("Некоректна дата");
} else {
    let days = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    if ((y%400===0) || (y%4===0 && y%100!==0)) days[2] = 29;

    if (d > days[m]) {
        alert("Немає такого дня в місяці");
    } else {
        d++;
        if (d > days[m]) {
            d = 1;
            m++;
            if (m > 12) { m=1; y++; }
        }
        alert(`Наступна: ${d}.${m}.${y}`);
    }
}
//6
let numStr = prompt("Число:");
let k = +prompt("Зсув ліворуч на:");

if (!/^\d+$/.test(numStr) || isNaN(k) || k < 0) {
    alert("Некоректні дані");
} else if (numStr.length <= 1 || k === 0) {
    alert(numStr);
} else {
    k = k % numStr.length;
    let res = numStr.slice(k) + numStr.slice(0, k);
    alert(res);
}
//7
console.log("FizzBuzz 1–100:");

for (let i = 1; i <= 100; i++) {
    let s = "";
    if (i % 3 === 0) s += "Fizz";
    if (i % 5 === 0) s += "Buzz";
    console.log(s || i);
}
//8
alert("Загадай число 0–100, я вгадаю");
let min = 0;
let max = 100;
while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let ans = prompt(`Твоє число:\n> ${mid}   (більше)\n< ${mid}   (менше)\n= ${mid}   (вгадав)\n\nПиши > < або =`);
    if (!ans) break;
    ans = ans.trim();
    if (ans === "=" || ans === "==") {
        alert(`Вгадав! Це ${mid} 🎉`);
        break;
    } else if (ans === ">") {
        min = mid + 1;
    } else if (ans === "<") {
        max = mid - 1;
    } else {
        alert("Тільки > < або =");
        continue;
    }
}
if (min > max) alert("Щось не так... число точно 0–100?");