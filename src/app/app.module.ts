import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './components/todos-component/todos-component.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
