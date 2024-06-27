import ORM from "./ORM.js";

class Usuario extends ORM {

  usuariocreate(id, obj){
    try{
      this.create(id,obj)
    }catch{
      
    }
  }

}


export default Usuario


