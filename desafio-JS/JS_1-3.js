function verifique (vect){
    var s=vect.indexOf("Javascript")
    if(s!=-1){
        return false
    }else{
        return true
    }
}



var skills = ["Javascript", "ReactJS", "React Native"];
console.log(verifique(skills))
