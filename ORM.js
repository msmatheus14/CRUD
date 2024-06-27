import ErrorValorVazio from "./ErrorValorVazio.js";
import ErrorTipoId from "./ErrorTipoId.js"

class ORM {

#vetor_elemento
  constructor() {
    if (new.target === ORM) {
      throw new Error("Classe Abstrata meu parceiro!");
    }
    this.#vetor_elemento = []
  }

  #buscarElemento(id) {

    let val = null;

    this.#vetor_elemento.map((n, i) => {
      for (let ind in n) {
        if ((ind = "id")) {
          if (n[ind] == id) {
            val = i;
          }
        }
      }
    });

    return val;
  }

  create(id, obj) {

    if(id === null || id === undefined || obj === null || obj === undefined){
      throw new ErrorValorVazio("ID e objetos não podem ser nulos ou indefinidos")
    }
    if (typeof id !== "number") {
      throw new ErrorTipoId("ID deve ser um número");
    }
    if (typeof obj !== "object") {
      throw new Error("obj deve ser um objeto");
    }

    
    if (this.#vetor_elemento.length == 0) {
      let obj2 = { id: id, ...obj };

      console.log(`Adicionado ${id} com sucesso!`);

      return this.#vetor_elemento.push(obj2);
    } else if (this.#vetor_elemento.length > 0) {
      let verificao = false;

      this.#vetor_elemento.map((n) => {
        if (n.id == id) {
          verificao = true;
        }
      });

      if (verificao == true) {
        console.log(`Atenção. Erro! ID ${id} Ja existe no sistema.`);
      } else {
        let obj2 = { id: id, ...obj };
        console.log(`Adicionado ${id} com sucesso!`);
        return this.#vetor_elemento.push(obj2);
      }
    }
  }

  update(id, obj_novo) {

    if(id === null || id === undefined || obj === null || obj === undefined){
      throw new Error("ID e objetos não podem ser nulos ou indefinidos")
    }
    if (typeof id !== "number") {
      throw new Error("ID deve ser um número");
    }

    if(typeof(obj_novo) !== "object"){
      throw new Error("obj_novo deve ser do tipo objeto")
    }
    
    
    // Gabriel dessa forma ele só atualiza os atributos que o usuario especificar.
    let elemento = this.#buscarElemento(id);

    let obj = this.#vetor_elemento[elemento];

    obj = { ...obj, ...obj_novo };

    this.#vetor_elemento[elemento] = obj;
  }

  delete(id) {

    if(id === null || id === undefined){
      throw new ErrorValorVazio('Id passado como parâmetro indefinido.')
    }
    let elemento = this.#buscarElemento(id);
    this.#vetor_elemento.splice(elemento, 1);
  }

  get read() {
    console.log(this.#vetor_elemento);
  }
}

export default ORM;
