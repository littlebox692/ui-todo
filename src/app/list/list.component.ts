import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: TodoItem[] = [
    {title: 'Daily report', details: 'write a daily report', highlight: true},
    {title: 'Weekly report', details: 'write a weekly report', highlight: false},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
