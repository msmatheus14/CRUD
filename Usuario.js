import ORM from "./ORM.js";

class Usuario extends ORM {
  vetor_elemento = [];

  usuariocreate(id, obj){
    try{
      this.create(id,obj)
    }catch{
      
    }
  }

  
  
}


export default Usuario


