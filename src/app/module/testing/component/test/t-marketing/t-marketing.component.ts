import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-marketing',
  standalone: false,
  templateUrl: './t-marketing.component.html',
  styleUrl: './t-marketing.component.scss'
})
export class TMarketingComponent {
  @Input() formGroupName!:string;
  market!:FormGroup;

  allListing = [{label:'first111', val:[1,2,3]},{label:'second', val:[1,2,3,4]}]
  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.market  = this.fgd.control.get(this.formGroupName) as FormGroup;
    this.defaultMarkDetails();
    console.log(this.market);
  }

  defaultMarkDetails(){
    this.marketDetails.clear();
    this.allListing.forEach((elem)=>{
      this.marketDetails.push(this.fb.group({
        textLabel:  [elem.label],
        textValue:  this.fb.array(
          elem.val.map((x)=>{
            return this.fb.group({
              descriptions: ['',[Validators.required]],
            })
          })
        )
      }))
    })
  }

  get marketDetails(){
    return this.market.controls['markDet'] as FormArray;
  }

  markTextValue(ind:number){
    return this.marketDetails.at(ind).get('textValue') as FormArray;
  }

}
