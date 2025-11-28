import { Component } from '@angular/core';

@Component({
  selector: 'app-t-test1',
  standalone: false,
  templateUrl: './t-test1.component.html',
  styleUrl: './t-test1.component.scss'
})
export class TTest1Component {
  selectedCategories: any[] = [];
  checks = [
    {name:'Accounting', key:'A', value:0},
    {name:'Marketing', key:'M', value:1},
    {name:'Production', key:'P', value:2},
    {name:'Research', key:'R', value:3},
  ]
  tabs = [
      { title: 'Title 1', content: 'Content 1', value: 0, status:false},
      { title: 'Title 2', content: 'Content 2', value: 1, status:false},
      { title: 'Title 3', content: 'Content 3', value: 2, status:false},
      { title: 'Title 4', content: 'Content 4', value: 3, status:false},
  ];

  ngOnInit() {
      this.selectedCategories = [this.checks[1]];
      this.changeTab(this.selectedCategories);
  }

  changeTab(event:any){
    let newTabs = this.tabs.map((elem)=>({
                    ...elem, 
                    status:event.some((obj:any)=>obj.value === elem.value)}));
    this.tabs = newTabs;
  }
}
