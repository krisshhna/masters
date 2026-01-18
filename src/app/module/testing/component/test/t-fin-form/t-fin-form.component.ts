import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-t-fin-form',
  standalone: false,
  templateUrl: './t-fin-form.component.html',
  styleUrl: './t-fin-form.component.scss'
})
export class TFinFormComponent {

  @Input() formGroupName!:string;
  finFormDetails!:FormGroup;
  apptDetails = [1,2,3];
  total = {firtAmt:0, secAmt:0, thirdAmt:0};

  constructor(public fgd:FormGroupDirective, public fb:FormBuilder){}

  ngOnInit(){
    this.finFormDetails = this.fgd.control.get(this.formGroupName) as FormGroup;
    console.log(this.finFormDetails);
    this.finDetailVal.clear();
    this.defaultHospital();
  }

  defaultHospital(){
    this.finDetailVal.push(this.fb.group({
      hospName:     ['',[Validators.required]],
      appointment:  this.fb.array([]),
     }));
  }

  addAppointments(ind:number){
    this.appointmentDetails(ind).push(this.fb.group({
        labFirst:   ['Total Billing'],
        firtAmt:    ['',[Validators.required]],
        labSec:     ['Paid amount'],
        secAmt:     ['',[Validators.required]],
        labThird:   ['Balance amount'],
        thirdAmt:   ['',[Validators.required]],
    }))
  }

  appointmentDetails(ind:number){
    return this.finDetailVal.at(ind).get('appointment') as FormArray;
  }

  get finDetailVal(){
    return this.finFormDetails.controls['finDetail'] as FormArray;
  }

  paidAmount(event:string,i:number, j:number){
    let pA = Number((event));
    let tot = Number(this.appointmentDetails(i).at(j).get('firtAmt')?.value);
    this.appointmentDetails(i).at(j).get('thirdAmt')?.setValue(tot - pA);
    this.calculateTotalAmounts();
  }

  removeAppointment(i:number, j:number){
    this.appointmentDetails(i).removeAt(j);
    this.calculateTotalAmounts();
  }

  removeDefault(i:number){
    this.finDetailVal.removeAt(i);
  }

  calculateTotalAmounts(){
    let totalCal = this.finFormDetails.value.finDetail;
    this.total = totalCal.reduce((acc:any, cval:any, cIndex:any)=>{
      cval.appointment.forEach((elem:any)=>{
        acc.firtAmt +=  elem.firtAmt;
        acc.secAmt  +=  elem.secAmt;
        acc.thirdAmt+=  elem.thirdAmt;
        acc.index   = cIndex;
      });
      return acc;
    },{firtAmt:0, secAmt:0, thirdAmt:0, index:0});
  }
}
