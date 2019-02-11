import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos-component',
  templateUrl: './todos-component.component.html',
  styleUrls: ['./todos-component.component.css']
})
export class TodosComponent implements OnInit {
  public allToDos = [];
  constructor() { }

  ngOnInit() {
  }

  onNewTaskSubmit(task) {
    this.allToDos.push(Object.assign({}, task));
  }
}
