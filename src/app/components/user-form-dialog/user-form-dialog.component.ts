import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.css']
})

export class UserFormDialogComponent implements OnInit {
  formInstance: FormGroup;
  formAction: string;

  constructor(public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.formInstance = new FormGroup({
      "id":  new FormControl('', Validators.required),
      "nome": new FormControl('', Validators.required),
      "emailMain": new FormControl('', Validators.required),
      "emailAlternative": new FormControl('', Validators.required),
      "idade": new FormControl('', Validators.required),
      "cargo": new FormControl('', Validators.required),
    });

    this.formInstance.setValue(data);

    if(data.id){
      this.formAction = 'Editar usuário';
    }else{
      this.formAction = 'Adicionar usuário';
    }
  }

  ngOnInit(): void {

  }

  save(): void {
    this.dialogRef.close(Object.assign(new User(), this.formInstance.value));
  }

}
