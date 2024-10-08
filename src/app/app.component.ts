import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { dummyUsers } from './components/user/dummy-user';
import { TasksComponent } from './components/tasks/tasks.component';
import { CardComponent } from "./components/ui/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, HeaderComponent, UserComponent, TasksComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anguler-project';
  users = dummyUsers;
  selectedId?: string;

  onSelectUser(id: string) {
    this.selectedId = id;
  }

  get selectedUser() {
    return dummyUsers.find(user => user.id === this.selectedId);
  }
}
