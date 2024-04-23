import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListItem } from "./todo/todo-list-item.component";
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItem, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
