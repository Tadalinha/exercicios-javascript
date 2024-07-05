// Ex.01
let nome = 'Paul'
console.log('Ex. 01', nome)
// Ex.02
let a = 5 , b = 10
console.log('\nEx. 02', a+b)
// Ex.03
let PrimeiroNome = 'Paul', SegundoNome = 'schramm'
console.log('\nEx. 03', PrimeiroNome + SegundoNome)
// Ex.04
let pessoa={

    nome: 'Paul',
    idade: 17,
    endereco: 'garcia',
    telefone: 47996290990
}
console.log('\nEx. 04', pessoa);
// Ex.04b
let frutas = ['maça','banana','laranja']
frutas[3] = 'uva'
console.log('\nEx. 04b: ', frutas);
// Ex.05
let numeros = [1,2,3,4,5]
console.log('\nEx. 05', numeros[0], numeros[4])
//Ex.06
let cores = ['vermelho','verde','azul']
for(let i=0;i<cores.length;i++){
    console.log('\nEx. 06: ', cores[i]);
}
//Ex.07
let idade = 19      
console.log('\nEx 07', 'idade')

if(idade < 18){
    console.log('menor de idade')
}else{
    console.log('maior de idade')
}