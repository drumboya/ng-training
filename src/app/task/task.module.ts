import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule} from 'ngx-color-picker';


import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService,
  AgePipe
} from './task.barrel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    ColorPickerModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
