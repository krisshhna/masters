import { Component, Input } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-acc-form',
  standalone: false,
  templateUrl: './t-acc-form.component.html',
  styleUrl: './t-acc-form.component.scss'
})
export class TAccFormComponent {
  @Input() formGroupName!:string;
  formAccounts!:FormGroup;

  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}
  listAcct = [{label:'first', val:[1,2,3]},{label:'second', val:[4,5]},{label:'third', val:[7,9,2,9,1,21]}];

  ngOnInit(){
    this.formAccounts = this.fgd.control.get(this.formGroupName) as FormGroup;
    this.addAccounts();
    console.log(this.formAccounts);
  }

  get allAccounts(){
    return this.formAccounts.controls['acounts'] as FormArray;
  }

  addAccounts(){
    this.allAccounts.clear();
    this.listAcct.forEach((elme)=>{
      this.allAccounts.push(this.fb.group({
        labels: [elme.label],
        labelArray: this.fb.array(
          elme.val.map((elem:any)=>{
           return this.fb.group({
              details:['',[Validators.required]]
            });
          })
        ),
      }));
    });
  }

  allLabelArray(ind:number){
    return this.allAccounts.at(ind).get('labelArray') as FormArray;
  }
}