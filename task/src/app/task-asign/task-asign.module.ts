import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports : [
    AdminComponent
  ]
})
export class TaskAsignModule { }
