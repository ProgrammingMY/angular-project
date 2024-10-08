import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { dummyUsers } from './dummy-user';
import { IUser } from '../../../types';
import { CardComponent } from "../ui/card/card.component";

const randomUser = () => {
  const randomIndex = Math.floor(Math.random() * dummyUsers.length);
  return dummyUsers[randomIndex];
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input({required: true}) user?: IUser;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // new style to do output
  // select = output<string>();

  signalName = input.required<string>();

  get name() {
    return 'this is ' + this.user?.name;
  }

  onClick() {
    this.select.emit(this.user?.id);
  }
}
