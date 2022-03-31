import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Staff } from './staff';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public staffs: Array<Staff> = [
    { id:1, name: 'kamlesh' }, { id:2, name: 'sam' }, { id:3, name: 'suri' }, { id:4, name: 'guru' }, { id:5, name: 'ishwar' },
    { id:6, name: 'tonny' },{ id:7, name: 'sunny' }, { id:8, name: 'kalpana' }, { id:9, name: 'harini' }, { id:10, name: 'tamana' }
  ];
  public staffid!: number;
  public timeselected!: string;
  public dateselected!: any;
  
  public staffdetailsform = new FormGroup({
    tasktitle: new FormControl(''),
    assignedwork: new FormControl('')
  })
  
  public collecteddata!: any [];

  constructor() { }

  staffdetails() {
    this.collecteddata = [{
      sid: this.staffid,
      giventitle: this.staffdetailsform.controls['tasktitle'].value,
      giventask:  this.staffdetailsform.controls['assignedwork'].value,
      givendate: this.dateselected,
      giventime: this.timeselected
    }];
    // the values saved in console in array of objects
    console.warn(this.collecteddata);
  }

  ngOnInit(): void {
  }

}
