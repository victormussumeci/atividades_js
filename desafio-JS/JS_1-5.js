function mostraHabilidades(usuarios){
    for(usuario of usuarios){
        console.log("o "+ usuario.nome+" possui as habilidades : "+ usuario.habilidades.join(','))
    }
}
    usuarios=[{
        nome:"Diego",
        habilidades:["JavaScript","ReactJS","Redux"]
    },{
        nome:"victor",
        habilidades:["malabares", "cortar limao","bater pezinho"]
    }];

   console.log (mostraHabilidades(usuarios))