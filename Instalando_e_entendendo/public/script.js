var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var btnCalc = document.querySelector("#calc");
function soma(n1, n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    return n1 + n2;
}
btnCalc.addEventListener("click", function () {
    console.log(soma(num1.value, num2.value));
});
