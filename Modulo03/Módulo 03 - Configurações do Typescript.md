# 1. Usando o watchMode no arquivo

Substitui a forma manual de executar o arquivo. Com o watchMode ativado conseguimos executar e compilar os arquivos automaticamente enquanto ele estiver ativo

## Tutorial

Com o terminal aberto na pasta do projeto:

1. Digite o comando - <mark style="background: #BBFABBA6;">tsc caminho_do_arquivo -w</mark>

Quando o arquivo for modificado, assim que ser salvado, a compilação é executada automaticamente

___

# 2. Criando o arquivo tsconfig.json

Assim, começamos a trabalhar a nível de projeto, e não em apenas um arquivo isoladamente.

## Tutorial

Com o terminal aberto na pasta do projeto:

1. Digite o comando  <mark style="background: #BBFABBA6;">tsc init</mark>
	Resultado: arquivo tsconfig.json criado na pasta pai do projeto.

2. Agora, apenas rodando o comando <mark style="background: #BBFABBA6;">tsc</mark> todos os arquivos .ts  do projeto serão compilados (Gera os arquivos mesmo com erros, pode-se mudar nas configurações...)

3. watchMode também funciona, mas a nível de projeto usando o comando <mark style="background: #BBFABBA6;">tsc -w</mark>

___

# 3. Escolhendo quais arquivos compilar

>[!obs] Escrever essas configurações extras fora do <mark style="background: #gold;">compilerOptions</mark>

### Exclude: arquivos que não serão compilados:

```json
{
	"compilerOptions": {
		// Configurações do TypeScript...
	},

	"exclude": [ // Arquivos que não irão ser executados
		"caminho_do_arquivo",
		"**/*.dev.ts", // Todo arquivo com essa extensão no projeto
		"nome_da_pasta/*.dev.ts", // Todo arquivo com essa extensão nessa pasta
		"nome_da_pasta" // Exclui a pasta
	],
}
```

### Include: arquivos que serão compilados:

```json
{
	"compilerOptions": {
		// Configurações do TypeScript...
	},

	"include": [ // Executa apenas o que for especificado aqui dentro
		"caminho/nome_do_arquivo.ts", // Executa apenas esse arquivo
		"nome_da_pasta/*", // Todos os arquivos dentro desta pasta
	]
}
```

___

# 4. Entendendo o Target

É a especificação da versão do JavaScript para a compilação do arquivo TypeScript
Podemos usar o ES5 ou ES6 que são os mais comuns e mais utilizados, preferencialmente o ES6

```json
{
	"compilerOptions": {
		"target": "ES6" // ou ES5
	},
}
```

___

# 5. Trabalhando com Libs no TypeScript

Quando iniciamos o TS a configuração <mark style="background: #FF5582A6;">lib</mark> vem comentada, pois, assim que iniciado o TS assume por padrão que vamos trabalhar com o navegador

```json
{
	"compilerOptions": {
		// "lib": []
	},
}
```

Para usarmos outras bibliotecas, devemos descomentar a configuração <mark style="background: #FF5582A6;">lib</mark> e adicionar as respectivas bibliotecas no array.

```json
{
	"compilerOptions": {
		"lib": [
			"DOM",
			"ES5",
			"DOM.Iterable",
			"ScriptHost"
		]
	},
}
```

Essas quatro bibliotecas adicionadas são as que vem por padrão quando iniciamos um projeto Typescript e o  <mark style="background: #FF5582A6;">lib</mark> está comentado

___

# 6. rootDir e outDir

## outDir
Onde colocar os arquivos .js <mark style="background: #BBFABBA6;">já</mark> compilados.

```json
{
	"compilerOptions": {
		"outDir": "./public/assets/js", // Os arquivos compilados serão salvos nesse caminho
	},
}
```

## rootDir
Onde os arquivos .ts <mark style="background: #BBFABBA6;">não</mark> compilados estão salvos.
Isso inclui as pastas dentro da pasta rootDir~={blue} e assim que os arquivos forem compilados a estrutura de pastas criadas dentro do rootDir se mantêm no outDir=~

```json
{
	"compilerOptions": {
		"rootDir": "./src", // Os arquivos .ts estão localizados todos nesta pasta
	},
}
```

___

# 7. noComment, noEmit e noEmitOnError

```json
{
	"compilerOptions": {
		"removeComments": true, // ou false
		"noEmit": true, // ou false
		"noEmitOnError": true // ou false (não vemm por padrão, mas pode ser adicionada no json)
	},
}
```

## removeComments
Remove os comentários dos arquivos compilados.

## noEmit
Não gera os arquivos compilados

## noEmitOnError
Não gera os arquivos compilados se houver algum erro nos códigos em Typescript
>[!obs] Não vem por padrão
>Essa configuração não vem por padrão no arquivo tsconfig.json original, mas pode ser adicionada, digitando como no código acima <mark style="background: #D2B3FFA6;">noEmitOnError</mark>  

___

# 8. Configurações para a qualidade do código

## noUnusedLocals (true / false)
Aviso para variáveis definidas localmente mas que não estão sendo usadas.

## noUnusedParameters (true / false)
Aviso para parâmetros definidos na função, mas que não estão sendo usados.

## noImplicitReturns (true / false)
Impossibilita o uso de funções que podem retornar algo ou undefined