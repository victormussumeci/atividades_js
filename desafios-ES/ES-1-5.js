//5.1
const arr = [1, 2, 3, 4, 5, 6]
const[x,...y]=arr
console.log(x)
console.log(y)

export function soma(...nums){
    nums.reduce ((a,b)=>a+b)
}
console.log(soma(1,2,3,4,5,5,6,6))
//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
   
   const usuario2={...usuario,nome:'gabriel'}
   console.log(usuario2)
   const usuario3={...usuario,endereco:{...usuario.endereco,cidade:'lontras'}}
   console.log(usuario3)