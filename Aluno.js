import ORM from './ORM.js';

class Aluno extends ORM{
  
  #nome
  #endereco
  #data_nascimento
  #telefone
  #cpf
  #matricula
  #curso_andamento
  
  constructor(){
    super()

    this.alunos = []
    
    this.#nome = undefined
    this.#endereco = undefined
    this.#data_nascimento = undefined
    this.#telefone = undefined
    this.#cpf = undefined
    this.#matricula = undefined
    this.#curso_andamento = undefined
    
  }

  create (nome,endereco,dataNascimento,telefone,cpf,curso_andamento){

    let obj = {
      nome:nome,
      matricula: Aluno.nmatricula++,
      endereco:endereco,
      data_nascimento:dataNascimento,
      cpf:cpf,
      telefone:telefone,
      curso_andamento:curso_andamento

    }

    this.alunos.push(obj)
  }

   update(matricula, nome, endereco, cpf, curso_andamento){

    let encontrado = false
     
     for (let i = 0; i < this.Aluno.length; i++){

       if(matricula == alunos[i].#matricula){

         this.#nome = nome
         this.#endereco = endereco
         this.#cpf = cpf
         this.#curso_andamento = curso_andamento

         encontrado = true
         break

         
       }
     }

     if(encontrado == true){
       return `Aluno: ${this.#nome} atualizado com sucesso!`
     }
     else
     {
       return `Aluno não encontrado!`
     }
  }

delete(matricula){

  let encontrado = false
  
  for(let i = 0 ; i< this.alunos.length;i++){

    if(matricula == this.alunos[i].#matricula){
      encontrado = true
      this.alunos.splice(i, 1)
      break
    }
    
  }

  if(encontrado = true){
    return "Aluno excluído com sucesso!"
  }
}
  get all(){
    return this.alunos
  }
  
  
  one(matricula){
    let ind_encontrado
    let encontrado = false
     for(let i=0; i<this.alunos.length; i++){
       if(matricula == this.alunos[i].matricula){
         ind_encontrado = i
         encontrado = true
         break
       }
     }

  if(encontrado === true){
    
   return `Dados do aluno ${this.alunos[ind_encontrado].nome}: \n Endereço: 
   ${this.alunos[ind_encontrado].endereco}\n Data de 
     nascimento: ${this.alunos[ind_encontrado].data_nascimento}\n Telefone: 
   ${this.alunos[ind_encontrado].telefone} \n CPF: 
     ${this.alunos[ind_encontrado].cpf}\n Matricula: ${this.alunos[ind_encontrado].matricula} \n Curso de 
     andamento: 
     ${this.alunos[ind_encontrado].curso_andamento}`
    
  } else{
    return "Aluno não encontrado!"
  }
  }
}

Aluno.nmatricula = 0;

const alunosIf = new Aluno();

alunosIf.create("José", "Rua A", "12/02/1980", "987654321","454.646.456-52", "567464", "Informática")

alunosIf.create("Maria", "Rua B", "12/02/1980", "987654321","454.646.456-52", "567464", "Informática")

console.log(alunosIf.all);
console.log(alunosIf.one(1))


export default Aluno; 