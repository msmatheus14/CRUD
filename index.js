import USUARIO from "./Usuario.js";
import Generico from "./Generico.js";

let user = new USUARIO();
user.create( { nome: "João", idade: 30 });
user.create(1, { nome: "Maria", idade: 25 });

user.create(3, { nome: "Pedro", idade: 40 });
user.usuariocreate("d", 'df')
user.usuariocreate(1, { nome: "João", idade: 30 })

