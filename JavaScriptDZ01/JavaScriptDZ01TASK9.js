//9
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