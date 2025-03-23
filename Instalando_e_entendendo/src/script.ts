const num1 = document.querySelector("#num1") as HTMLInputElement;
const num2 = document.querySelector("#num2") as HTMLInputElement;
const btnCalc = document.querySelector("#calc") as HTMLButtonElement;

function soma(n1, n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    return n1 + n2;
}

btnCalc.addEventListener("click", () => {
    console.log(soma(num1.value, num2.value));
})