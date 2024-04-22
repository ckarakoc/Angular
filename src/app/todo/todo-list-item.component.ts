import {Component} from "@angular/core";

@Component({
  standalone: true,
  selector: 'todo-list-item',
  template: ' <p>(TODO) {{ taskTitle }}</p>',
  styles: ['li { color: darkred; }'],
})

export class TodoListItem {
  taskTitle = 'Read cup of coffee introduction';
  isComplete = false;

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

  completeTask() {
    this.isComplete = true;
  }
}
