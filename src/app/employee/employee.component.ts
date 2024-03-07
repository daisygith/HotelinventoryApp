import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{

  empName: string = 'John';
  constructor() {
  }
  ngOnInit(): void {
  }

}
