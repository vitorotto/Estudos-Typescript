# 1. O que é Typescript?
É uma versão mais tipada do JS comum, desenvolvida pela Microsoft, porém gratis.

# 2. Exemplo de necessidade do Typescript

```js
// Selecionando os elementos
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var btnCalc = document.querySelector("#calcular");
var boxResult = document.querySelector("#resultado");
function calc(n1, n2) {
    return n1 + n2;
}
btnCalc.addEventListener('click', function () {
    boxResult.innerHTML = calc(num1.value, num2.value);
});
```

Repare que para que o calculo de soma aconteça da forma correta, devemos converter os dados do input de String para Number, coisa que com o TS não é necessária, pois especificamos o tipo de dados na declaração da variável.

# 3. Instalando o TypeScript

Acessar o link e ler o tutorial:
https://www.typescriptlang.org/download/

Para instalar o TypeScript no projeto devemos seguir esses passos no terminal:

1. Abrir a pasta do projeto no terminal;
2. Iniciar o Node com <mark style="background: #BBFABBA6;">npm init -y</mark>
3. Instalar o TS com o comando <mark style="background: #ADCCFFA6;">npm install typescript --save-dev
</mark>
4. verificar a versão com o comando <mark style="background: #BBFABBA6;">npx tsc --version</mark>