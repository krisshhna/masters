import { Component, Input } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-basic-form',
  standalone: false,
  templateUrl: './t-basic-form.component.html',
  styleUrl: './t-basic-form.component.scss'
})
export class TBasicFormComponent {
  @Input() formGroupName!:string;
  comBasicForm!:FormGroup;
  addDetail = [{name:'Current Address'},{name:'Permanent Address'}];
  allList = [{name:'Indian', code:'ind'}, {name:'NRI', code:'nri'}];
  constructor(public fb:FormBuilder, public fgd:FormGroupDirective){}

  ngOnInit(){
    this.comBasicForm = this.fgd.control.get(this.formGroupName) as FormGroup;
    this.addAddress(this.addDetail);
  }

  addAddress(numb:any){
    numb.forEach((elem:any)=>{
      this.address.push(this.fb.group({
            name:       [elem.name],
            address1:   ['',[Validators.required]],
            landmark:   ['',[Validators.required]],
            pincode:    ['',[Validators.required]],
            documents:  ['',[Validators.required]],
            docPan:     [''],
            docAdhar:   [''],
            docPassport:[''],
            state:      ['',[Validators.required]],
            city:       ['',[Validators.required]],
      }));
    })
  }

  get address(){
    return this.comBasicForm.controls['address'] as FormArray;
  }

  showSelected(itemName:any, index:number){
    let name = itemName.value.code;
    if(name === 'ind'){
        this.address.controls[index].get('docPan')?.setValidators([Validators.required]);
        this.address.controls[index].get('docAdhar')?.setValidators([Validators.required]);
        this.address.controls[index].get('docPan')?.enable();
        this.address.controls[index].get('docAdhar')?.enable();

        this.address.controls[index].get('docPassport')?.clearValidators();
        this.address.controls[index].get('docPassport')?.disable();
    }else{
        this.address.controls[index].get('docPan')?.clearValidators();
        this.address.controls[index].get('docAdhar')?.clearValidators();
        this.address.controls[index].get('docPan')?.disable();
        this.address.controls[index].get('docAdhar')?.disable();
        this.address.controls[index].get('docPassport')?.setValidators([Validators.required]);
        this.address.controls[index].get('docPassport')?.enable();
    }

        this.address.controls[index].get('docPan')?.updateValueAndValidity();
        this.address.controls[index].get('docAdhar')?.updateValueAndValidity();
        this.address.controls[index].get('docPassport')?.updateValueAndValidity();
  }

  // get bankDet(){
  //   return this.comBasicForm.controls['bankDet'] as FormArray;
  // }

  // get education(){
  //   return this.comBasicForm.controls['education'] as FormArray;
  // }
}
