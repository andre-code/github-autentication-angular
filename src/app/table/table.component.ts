
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-app',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() repos: [];
 constructor(){}

 ngOnInit() {}
  
} 
