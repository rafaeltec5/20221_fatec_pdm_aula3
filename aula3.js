
/* function hello(){
    console.log("hello")
}

hello()

function hello(nome){
    console.log("Hello, " + nome)
}
hello("Rafael") */

/* const triplo = function (n = 1){
    return n * 3
}

console.log(triplo())
console.log(triplo(5)) */

/* const hello = () => console.log("Hello")
hello() */

/* const dobro = (n) => 2 * n */

/* const dobro = (n) => {
    return 2 * n
} */

/* console.log(dobro(7)) */

/* let umaFuncao = function (){
    console.log("Fui armazenada em uma variável")
}
umaFuncao() */

//funcao de alta ordem
/* function f (funcao){
    funcao()
} */

//funcao de alta ordem também
/* function g(){
    function outraFuncao(){
        console.log("Fui produzida pela g")
    }
    return outraFuncao
}

const resultadoDaG = g()
console.log(resultadoDaG())
  */
/* f(function(){
    console.log("Estou sendo passada para a f")
})

f() */

/* function map(v, f) {
    let aux = [];
    for(let i = 0; i < v.length; i++){
        aux.push(f(v[i]));
    }
    return aux;
}

function filter (v, f){
    let aux = [];
    for(let i = 0; i < v.length; i++){
        if (f(v[i])){
           aux.push(v[i])
        }
    }
    return aux;
} 

console.log(filter([1,2,3,4,5,6], (n) => n % 2 == 0));
console.log(map(['abc', 'def', 'ghi'], (n) => n.charAt(0)));
console.log(map(['abc', 'def', 'ghi'], (n) => n.length)); */

let pessoa = {
    nome: "Rafael",
    idade: 17
}

let p = {
    nome: "Maria",
    idade: 44,
    endereco: {
        logradouro: "Rua B",
        numero: 44,
        bairro: "Vila K"
    }
}

console.log(p.endereco.logradouro)
console.log(p.endereco['bairro'])
console.log(p['endereco'].numero)
console.log(p['endereco']['numero'])