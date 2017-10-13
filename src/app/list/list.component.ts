import { Component, OnInit } from '@angular/core';
import { TodoApi } from '../services/todo-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public todoApi: TodoApi) {
  }

  ngOnInit(): void {
  }

}
