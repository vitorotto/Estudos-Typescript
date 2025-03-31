# 1. Como não gerar o JS se tiver erro
Executar o comando "tsc src/script.ts --noEmitOnError"

# 2. Os tipos primitivos
1. String;
2. number;
3. boolean

```ts
let nome: string = 'Vitor';
let idade: number = 90;
let programador: boolean =false;
```

Sempre usar a tipagem com a primeira letra minúscula, pois a Maiúscula fax referência ao objeto String.prototype() 

# 3. Tipos em Array

```ts
let idades: number[] = [1, 2, 3, 4, 5];
let numeros: Array<number> = [1, 2, 3];
```

Pode-se usar esse formato para todos os outros tipos primitivos do TS

# 4. O type any (e quando usá-lo)

Quando usamos o tipo any em um array, ele passa a aceitar muitos tipos dentro do array

```ts
let coisas: any = ['bonieky', 90, 'pedro'];

coisas.push(true);
```

# 5 e 6. Types em parâmetros e retornos da função

```ts
let firstLetterUpperCase = function (str: string): string {
    var strArr = str.split('');
    var result = strArr.join('').replace(strArr[0], strArr[0].toUpperCase());
    return result;
};
  
const soma = (a: number, b: number): number => a + b
  
console.log(soma(2, 3))
console.log(firstLetterUpperCase('vitor'));
```

# 7. Contextual Typing em Funções

O TypeScript interpreta o contexto do nosso código

```ts
const nomes = ['Vitor', 'Hugo', 'Lucas'];
  
nomes.forEach((nome) => {
    console.log(nome)
})
```

Não houve nenhum erro e o parâmetro nome é automaticamente do tipo string pois o array "nomes" é um array de strings'

# 8. Types em Objetos

```ts
const trataDados = (obj: {nome: string, idade: number}) => `Olá ${obj.nome}, você tem ${obj.idade}`;
  
const user = {
    nome: 'Vitor',
    idade: 20,
}
  
console.log(trataDados(user))
```

# 9. Propriedades Opcionais

```ts
const trataDados = (obj: {nome: string, idade?: number}) => !obj.idade ? `Olá ${obj.nome}, você tem ${obj.idade}` : `Olá ${obj.nome}`;

const user = {

    nome: 'Vitor'

}

console.log(trataDados(user))
```

Para tornar um parâmetro opcional colocamos o parâmetro seguido de um "?" antes dos ":" Observe na linha 1... Os parâmetros da função, principalmente o "idade".

Essa função verifica se tem ou não tem idade cadastrada por meio do operador ternário

# 10. Union Types (múltiplos types)

```ts
// Em uma variável
let idade: string | number = 90 // Essa variável aceita dados em string e numéricos
idade = '90'
  
// Em uma função
function mostrarIdade(idade: string | number) {
    typeof idade == "string" ? console.log(`Minha idade é ${idade.toUpperCase()}`) : console.log(idade)
}
  
mostrarIdade(90)
mostrarIdade('90')
```

# 11. Type e Interface: Como usar e quando usar

Type e Interface servem para criar tipos em tipos não nativos no TypeScript

## Type
Usando o Type para criar tipos.

```ts
type NomeCompleto = string

let nome: NomeCompleto = "Vitor"
```

Repare que o código ficou desnecessariamente maior, por isso só usamos o type em algumas situações. São elas:
+ Quando queremos simplificar e organizar melhor o nosso código, geralmente quando estamos trabalhando com objetos;
+ Quando temos um type que é replicável em outras partes no código:
```ts
// Ex001
type Idade = string | number

const idade: Idade = 90

function mostrarIdade(i: Idade): Idade {
	return i
}

// Ex002
type User = {
	nome: string,
	idade: number
}

function resumo(usuario: User) {
	return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
	nome: 'Vitor',
	idade: 90
})
```

## Interface
Podemos usar o Interface. 

```ts
interface User {
	nome: string,
}

// Muito código ...

interface User {
	idade: number
}

function resumo(usuario: User) {
	return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
	nome: 'Vitor',
	idade: 90
})
```

## Diferença entre Type e Interface
O que muda entre os dois é que usando o ~={purple}type=~, o tipo fica inalterável, ou seja, não podemos adicionar mais nenhuma propriedade nem modificar as existentes, já com o ~={purple}interface=~ conseguimos.

# 12. Type Assertions

Quando selecionamos um elemento HTML devemos especificar seu tipo como no exemplo abaixo, para termos todas as suas propriedades disponíveis corretamente. Por exemplo o "~={blue}value=~" do console.log abaixo, ele<mark style="background: #ADCCFFA6;"> só está disponível para elementos HTML do tipo Input</mark>, por isso especificamos ele quando selecionamos ele com o <mark style="background: #FFB86CA6;">"as HTMLInputElement"</mark>

> [!obs]
Existem vários tipos de elementos HTML

```ts
const idadeField = document.getElementById('idade') as HTMLInputElement

// ...

console.log(idadeField.value);
```

# 13. Literal Types
Usamos quando o tipo tem que ser exatamente algum valor

```ts
let nome: 'Vitor' = 'Vitor'
```

Se o nome for diferente de "Vitor", acontecerá um erro.

```ts
let nome: 'Vitor' = 'Vitor'

nome = 'Pedro' // Vai dar erro
```

## Casos de uso - Literal Types
### Com Union Types
```ts
function mostrarTexto(texto: string, align: 'esquerda' | 'right' | 'center') {
	return `<div style="text-align: ${align}">${texto}</div>`
}

mostrarTexto('Vitor', 'left')
mostrarTexto('Vitor', 'right')
mostrarTexto('Vitor', 'blabla') // Vai dar erro
```

# 14. Inferência Literal

Um exemplo que pode ser usado para demonstrar a ocorrência de uma Inferência Literal é quando fazemos uma requisição desta forma:

```ts
function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ...
}
  
let url = 'https://wwww.google.com'
let method = 'GET'
  
fazerRequisicao(url, method) // method vai acusar um erro
```

## Por que "method" vai acusar um erro?
Porque declaramos ele como uma variável que pode ser mutável.
Podemos resolver declarando como uma constante ou tipo literal para ele
### Na variável "let method":

```ts
function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ...
}
  
let url = 'https://wwww.google.com'
let method: 'GET' | 'POST' = 'GET'
  
fazerRequisicao(url, method)
```

### Criando um type:

```ts
function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ...
}

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
}
let req: RequestDetails = {
    url: 'https://wwww.google.com',
    method: 'GET'
}
  
fazerRequisicao(req.url, req.method)
```

# 15. Type para funções

```ts
type MathFunction = (n1: number, n2: number) => number
  
const somar: MathFunction = (n1, n2) => {
    return n1 + n2
}
```

# 16. Retorno Void

Usado em funções sem retorno

>[!obs] Importante
>Funções em que seu tipo de retorno não é especificado, o padrão é o tipo VOID 

```ts
function removerEl(el: HTMLElement): void {
	el.remove();
}

removerEl(document.querySelector("#teste"))
```

Se eu especificar o tipo de retorno como VOID, posso usar a palavra return apenas para parar a execução da função