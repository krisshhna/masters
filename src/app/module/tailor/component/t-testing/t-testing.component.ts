import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-testing',
  standalone: false,
  templateUrl: './t-testing.component.html',
  styleUrl: './t-testing.component.scss'
})
export class TTestingComponent {
  testForm!:FormGroup;
  constructor(public fb:FormBuilder){}

  ngOnInit(){
    this.testForm = this.fb.group({
      username:   ['',[Validators.required]],
      message:    ['',[Validators.required]],
      subject:    ['',[Validators.required]]
    })
  }

  onTestSubmit(){
    if(this.testForm.valid){

    }
    console.log(this.testForm.value);
  }
}
