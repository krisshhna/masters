import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-prod',
  standalone: false,
  templateUrl: './t-prod.component.html',
  styleUrl: './t-prod.component.scss'
})
export class TProdComponent {
  @Input() formGroupName!:string;
  prodForms !:FormGroup;
  prodList = [{label:'first', list:[1,2,3,4]},{label:'seocnd Reading', list:[1,2,3,4,5,6,7]}];
  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.prodForms  = this.fgd.control.get(this.formGroupName) as FormGroup;
    this.initialListing();
    console.log(this.prodForms);
  }

  initialListing(){
    this.prodDetailsListing.clear();
    this.prodList.forEach((elem)=>{
      this.prodDetailsListing.push(this.fb.group({
        labels:   [elem.label],
        listings: this.fb.array(
          elem.list.map((elm)=>{
            return this.fb.group({
              details:  ['',[Validators.required]],
            })
          })
        ),
      }));
    })
  }

  get prodDetailsListing(){
    return this.prodForms.controls['prodDet'] as FormArray;
  }

  listingDetails(ind:number){
    return this.prodDetailsListing.at(ind).get('listings') as FormArray;
  }
}
