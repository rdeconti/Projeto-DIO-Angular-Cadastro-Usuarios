export class User {
  id?: number;
  nome: string;
  idade: number;
  emailMain: string;
  emailAlternative: string;
  cargo: string;

  constructor(
      id: number = null,
      nome: string = '',
      idade: number = 0,
      emailMain: string = '',
      emailAlternative: string = '',
      cargo: string = '')
  {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.emailMain = emailMain;
    this.emailAlternative = emailAlternative;
    this.cargo = cargo;
  }
}
