function Experiencia(anos){
    if(anos>0 && anos<=1){
        return "iniciante" 
    }else if(anos>1 && anos<=3){
        return "intermediario"
    }
    else if(anos>3 && anos<=6){
        return "Experiente"
    }else{
        return "jedi do js"
    }

}

var anos=8
console.log(Experiencia(anos))