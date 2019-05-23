function checarIdade(idade){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            return idade>=18?resolve():reject();
        }, 2000);
    })
}
checarIdade(15)
.then(function(){
    console.log('maior de 18')
}).catch(function(){
    console.log("menor de 28")
})

