import USUARIO from "./Usuario.js";
import Generico from "./Generico.js";

let user = new USUARIO();
user.create(1,{ nome: "João", idade: 30 });
user.create("d", { nome: "Maria", idade: 25 });

user.create(3, { nome: "Pedro", idade: 40 });

user.usuariocreate(1, { nome: "João", idade: 30 })

let user2 = new Generico()
user2.create(1, { nome: "Maria", idade: 25 })