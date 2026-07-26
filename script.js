let kotae;
let result;
let subjectArray;
let first;
let second;
let kigou;
window.onload = function () {

    kotae = document.getElementById("kotae");
    console.log("取得完了");
    let button = document.getElementById("judge");
    button.addEventListener("click", answer);




    cyusen();
}

function cyusen() {
    const min = -10;
    const max = 30;
    subjectArray = ["+", "×", "-", "÷"];
    first = Math.floor(Math.random() * (max - min + 1)) + min;
    second = Math.floor(Math.random() * (max - min + 1)) + min;
    kigou = subjectArray[Math.floor(Math.random() * subjectArray.length)];
    console.log(first);

    if (first <= 0) {
        document.getElementById("first").textContent = "(" + first + ")";
    } else {
        document.getElementById("first").textContent = first;
    }
    if (second <= 0) {
        document.getElementById("second").textContent = "(" + second + ")";
    } else {
        document.getElementById("second").textContent = second;
    }
    document.getElementById("kigou").textContent = kigou;

    if (first >= -10 && first <= 30) {
        console.log("角田No.22");
    }
    if (second >= -10 && second <= 30) {
        console.log("フェルナンド・アロンソ");
    }

    if (kigou == "+") {
        console.log("加");
        result = first + second;
    } else if (kigou == "-") {
        console.log("減");
        result = first - second;
    } else if (kigou == "×") {
        console.log("乗");
        result = first * second
    } else if (kigou == "÷") {
        console.log("除");
        result = first / second;
        result = Math.round(result * 100) / 100;
    }
}









function answer() {
    let kotaeNum = parseFloat(kotae.value, 10);
    console.log(result);
    if (kotaeNum == result) {
        alert("正解");
    } else {
        alert("不正解");
    }
    cyusen();
    console.log(kotae);
    kotae.value = "";


}






