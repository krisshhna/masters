import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: false,
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  @Input() formGroupName!:string;
  addDetails!:FormGroup;

  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.addDetails = this.fgd.control.get(this.formGroupName) as FormGroup;
    console.log(this.addDetails);
  }

  addAddress(){
    this.address.push(this.fb.group({
      address1:   ['',[Validators.required]],
      address2:   ['',[Validators.required]],
      city:       ['',[Validators.required]],
      landmark:   ['',[Validators.required]],
      pincode:    ['',[Validators.required]]
    }));
  }

  get address(){
    return this.addDetails.controls['detailAdd'] as FormArray;
  }

}
