const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
//2.1
   const idades= usuarios.map(function(item){
      const{idade}=item
      return idade
   });


   console.log(idades)
//2.2
   const trabaRoc= usuarios.filter(function(item){
        const{empresa,idade}=item
        return (empresa=='Rocketseat' && idade>18 )=== true
   });

   console.log(trabaRoc)

//2.3
   const procu= usuarios.find(function(item){
       return (item.empresa=='google')===true
   })
   console.log(procu)
//2.4
const two= usuarios.map(function(item){
    item.idade=item.idade*2
     return item
}).filter(function(item){
    return item.idade<=50 ===true
})
console.log(two)