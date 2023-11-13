import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// NgRx
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { handleCreate } from 'src/app/store/actions/todo.actions';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styles: [],
})
export class AddTodoComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store<AppState>);

  todoForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    body: ['', [Validators.required, Validators.minLength(3)]],
  });

  createTodo() {
    if (this.todoForm.invalid) return;
    this.store.dispatch(handleCreate(this.todoForm.value));
    this.todoForm.reset();
  }

  validField(name: string): boolean | null {
    return (
      this.todoForm.controls[name].errors &&
      this.todoForm.controls[name].touched
    );
  }
}
