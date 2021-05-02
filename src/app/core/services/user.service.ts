import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersData } from '../constants/user-static-data';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users$: BehaviorSubject<User[]>;
  users: Array<User> = [];

  constructor() {
    this.users$ = new BehaviorSubject([]);
    this.users = UsersData;
  }

  getAll() {
    this.users$.next(this.users);
  }

  add(user: User) {

    let id = Math.max.apply(Math, this.users.map(function(user) { return user.id + 1; }));
    user.id = id;
    this.users.push(user);
    this.users$.next(this.users);

  }

  edit(user: User) {

    let findElem = this.users.find(p => p.id == user.id);

    findElem.nome = user.nome;
    findElem.idade = user.idade;
    findElem.emailMain = user.emailMain;
    findElem.emailAlternative = user.emailAlternative;
    findElem.cargo = user.cargo;

    this.users$.next(this.users);

  }

  remove(id: number) {

    this.users = this.users.filter(p => {
      return p.id != id
    });

    this.users$.next(this.users);
  }

}
