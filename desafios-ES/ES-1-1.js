import { soma } from ".ES-1-5";
class Usuario{

    constructor(email,senha){
        this.email=email
        this.senha=senha
    
    }
     isAdmin(){
         return this.admin === true;
     }

};
class Admin extends Usuario{
   constructor(email,senha){
       super(email,senha)
       this.admin=true
   }
   


}
const usua= new Usuario('victor.vm32@gmail.com','30824910')
const admin = new Admin('victor.vm32@gmail.com','30824910')
console.log(usua.isAdmin())
console.log(admin.isAdmin())
soma(1,2)