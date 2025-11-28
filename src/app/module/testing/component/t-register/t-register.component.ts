import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-register',
  standalone: false,
  templateUrl: './t-register.component.html',
  styleUrl: './t-register.component.scss'
})
export class TRegisterComponent {
  registerForm!:FormGroup;

  constructor(public fb:FormBuilder){
    this.registerForm = this.fb.group({
      basicForm:  this.fb.group({
        fName:      ['',[Validators.required]],
        lName:      ['',[Validators.required]],
        email:      ['',[Validators.required]]
      }),
      address:      this.fb.group({
        detailAdd:  this.fb.array([])
      }),
      professional: this.fb.group({
        profDetail: this.fb.array([])
      })
    })
  }

  submitRecord(){
    console.log(this.registerForm.value);
  }
}
