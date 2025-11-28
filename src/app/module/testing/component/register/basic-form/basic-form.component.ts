import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: false,
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
  @Input() formGroupName!:string;
  basicFormDetails!:FormGroup;

  constructor(public fgd:FormGroupDirective){}

  ngOnInit(){
    this.basicFormDetails = this.fgd.control.get(this.formGroupName) as FormGroup;
    console.log(this.basicFormDetails);
  }
}
