import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-test1',
  standalone: false,
  templateUrl: './t-test1.component.html',
  styleUrl: './t-test1.component.scss'
})
export class TTest1Component {
  selectedCategories: any[] = [];
  checks = [
    {name:'Accounting 1', key:'A', value:1},
    {name:'Marketing 2', key:'M', value:2},
    {name:'Production 3', key:'P', value:3},
    {name:'Finance 4', key:'R', value:4},
  ];
  tabs = [
      { title: 'Basic Information', content: 'Basic Forms declaration', value: 0, status:true, formName:'basicForm'},
      { title: this.checks[0].name, content: 'Content 2', value: 1, status:false, formName:'accForm'},
      { title: this.checks[1].name, content: 'Content 3', value: 2, status:false, formName:'markForm'},
      { title: this.checks[2].name, content: 'Content 4', value: 3, status:false, formName:'prodForm'},
      { title: this.checks[3].name, content: 'Content 4', value: 4, status:false, formName:'finForm'},
      { title: 'Declaration', content: 'Content 4', value: 5, status:true, formName:'decForm'},
  ];

  duplicateRec = this.tabs;
  testingForm!:FormGroup;

  constructor(public fb:FormBuilder){
    this.testingForm = this.fb.group({
      basicForm:  this.fb.group({
        details:  this.fb.group({
          fName:  ['',[Validators.required, Validators.minLength(3)]],
          lName:  ['',[Validators.required, Validators.minLength(3)]],
          phone:  ['',[Validators.required]],
          email:  ['',[Validators.email, Validators.required]],
        }),
        address:  this.fb.array([]),
        education:this.fb.array([]),
        bankDet:  this.fb.array([]),
      }),
      accForm:    this.fb.group({
        acounts:  this.fb.array([]),
      }),
      markForm:   this.fb.group({
        markDet:  this.fb.array([]),
      }),
      prodForm:   this.fb.group({
        prodDet:  this.fb.array([]),
      }),
      finForm:    this.fb.group({
        finDetail:this.fb.array([]),
      }),
      decForm:    this.fb.group({
        dec: this.fb.array([])
      }),
    });
  }

  ngOnInit() {
      this.selectedCategories = [this.checks[3]];
      this.changeTab(this.selectedCategories);
  }

  changeTab(event:any){
    let newTabs = this.duplicateRec;
    if(event.length > 0){
      newTabs = newTabs.map((elem)=>({
                    ...elem, 
                    status:elem.status || event.some((obj:any)=>obj.value === elem.value)}));
    }
    this.tabs = newTabs;
    this.changeForm(this.tabs);
  }

  changeForm(tabs:any){
    for(let t of tabs){
      if(t.status){
        this.testingForm.get(t.formName)?.enable();
      }else{
        this.testingForm.get(t.formName)?.disable();
      }
    }
  }

  submitForm(){
    console.log(this.testingForm);
    console.log(this.testingForm.value);
  }
}
