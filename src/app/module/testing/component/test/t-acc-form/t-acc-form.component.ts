import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-acc-form',
  standalone: false,
  templateUrl: './t-acc-form.component.html',
  styleUrl: './t-acc-form.component.scss'
})
export class TAccFormComponent {
  @Input() formGroupName!:string;
  accountsForms!:FormGroup;
  totalAmounts=0;
  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.accountsForms  = this.fgd.control.get(this.formGroupName) as FormGroup;
    this.addAccounts();
  }

  addAccounts(){
    this.accoounts.push(this.fb.group({
      totLabel:   ['Total Amount'],
      totalAmt:   ['',[Validators.required]],
      balLabel:   ['Balance Amount'],
      balAmt:     ['',[Validators.required]],
      penLabel:   ['Pending Amount'],
      pendAmt:    ['',[Validators.required]],
    }));
  }

  total(){
    console.log(this.accoounts.value);
    this.totalAmounts = this.accoounts.value.reduce((sum:number, item:any)=>
      sum + item.totalAmt, 0)
  }

  get accoounts(){
    return this.accountsForms.get('accoounts') as FormArray;
  }
}
