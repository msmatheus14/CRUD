 class ORM {
    constructor(){
         if (this.constructor === ORM){
         throw new Error("Essa classe não pode ser instaciada")        
        }
    }
 
    get all(){
      return "Essa classe não pode ser instaciada "
    }

    one(matricula){
      return "Essa classe não pode ser instaciada "
    }

    set create(value){
      return "Não Instacie esse metedo"
    }

     update(value){
        return "Não Instacie esse metedo"
    }

    delete(value){
        return "Não Instacie esse metedo"
    }
  }

export default ORM; 