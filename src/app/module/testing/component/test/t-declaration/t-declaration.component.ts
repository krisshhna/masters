import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-declaration',
  standalone: false,
  templateUrl: './t-declaration.component.html',
  styleUrl: './t-declaration.component.scss'
})
export class TDeclarationComponent {
  @Input() formGroupName!:string;
  decForm!:FormGroup;
  decList:decInter[] = [{title:'dec1'}, {title:'dec2'}, {title:'dec3'}, {title:'dec4'}, {title:'dec5'},
                        {title:'dec6'}, {title:'dec7'}, {title:'dec8'}, {title:'dec9'}, {title:'dec0'}
  ];

  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.decForm  = this.fgd.control.get(this.formGroupName) as FormGroup;
    this.addDec();
  }

  addDec(){
    this.dec.clear();
    this.decList.forEach((elem:decInter)=>{
      this.dec.push(this.fb.group({
        label:  [elem.title],
        name:   ['',[Validators.requiredTrue]]
      }))
    })
  }

  get dec(){
    return this.decForm.controls['dec'] as FormArray;
  }
}

interface decInter{
  title:string
}