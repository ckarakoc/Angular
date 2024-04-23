import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { TodoListItem } from "./todo/todo-list-item.component";
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItem, HomeComponent, RouterLink],
  // templateUrl: './app.component.html',
  template: `
    <a [routerLink]="['/']">
      <header>
        <section>
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </section>
      </header>
    </a>
    <router-outlet/>
    <!--    <todo-list-item/>-->

    <!--    <app-home/>-->`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
