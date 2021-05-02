export class User {
  id?: number;
  nome: string;
  idade: number;
  cargo: string;

  constructor(id: number = null, nome: string = '', idade: number = 0, cargo: string = '') {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }
}

