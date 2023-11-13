import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// NgRx
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import {
  handleEdit,
  handleRemove,
  toggle,
} from 'src/app/store/actions/todo.actions';
import { ToggleTodoInterface } from 'src/app/interfaces/todo.interfaces';
import { EditTodoInterface } from '../../../../interfaces/todo.interfaces';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  private store = inject(Store);
  private fb = inject(FormBuilder);

  todoCheckForm!: FormControl;
  todoForm!: FormGroup;
  editMode: boolean = false;

  ngOnInit(): void {
    this.buildForms();

    this.handleCheckEvent();
  }

  handleCheckEvent() {
    this.todoCheckForm.valueChanges.subscribe((value) => {
      const todoCheckPayload: ToggleTodoInterface = {
        id: this.todo.id,
        complete: value,
      };

      this.store.dispatch(toggle(todoCheckPayload));
    });
  }

  buildForms() {
    this.todoCheckForm = new FormControl(this.todo.complete);

    this.todoForm = this.fb.group({
      id: [this.todo.id, [Validators.required]],
      title: [this.todo.title, [Validators.required]],
      body: [this.todo.body, [Validators.required]],
    });
  }

  activeEditMode() {
    if (this.editMode) {
      this.editTodo();
      return;
    }

    this.todoForm.reset({
      id: this.todo.id,
      title: this.todo.title,
      body: this.todo.body,
    });
    this.editMode = true;
  }

  editTodo() {
    this.store.dispatch(handleEdit(this.todoForm.value));

    this.editMode = false;
  }

  deleteTodo() {
    this.store.dispatch(handleRemove({ id: this.todo.id }));
  }
}
