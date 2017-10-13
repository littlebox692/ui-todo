import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Injectable()
export class TodoApi {
  items: TodoItem[] = [
    {title: 'Daily report', details: 'write a daily report', highlight: true},
    {title: 'Weekly report', details: 'write a weekly report', highlight: false},
  ];

  constructor() {
  }

}
