import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-login',
  standalone: false,
  templateUrl: './t-login.component.html',
  styleUrl: './t-login.component.scss'
})
export class TLoginComponent {
  loginForm!:FormGroup;

  constructor(public fb:FormBuilder){
    this.loginForm  = this.fb.group({
      username:   ['',[Validators.required]],
      password:   ['',[Validators.required, Validators.minLength(8)]],
      recheck:    ['',[Validators.requiredTrue]]
    });
  }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}