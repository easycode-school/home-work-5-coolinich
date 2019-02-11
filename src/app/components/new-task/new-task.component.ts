import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @ViewChild('addTaskForm') form: NgForm;
  @Output() taskAdd = new EventEmitter();

  public newTask = {
    taskTitle: '',
    taskDescription: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmitHandler() {
    this.taskAdd.emit(this.newTask);
    this.form.resetForm();
  }
}
