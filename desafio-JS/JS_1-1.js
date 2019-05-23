var Endereco={
rua: "Rua dos pinheiros",
numero: 1293,
bairro: "Centro",
cidade: "São Paulo",
uf: "SP"
}

function retorna(objeto){
    return `o usuario mora na cidade de(o) ${objeto.cidade}/ ${objeto.uf} , no bairro ${objeto.bairro}, na rua ${objeto.rua} com n° ${objeto.numero} `

}


console.log(retorna(Endereco))