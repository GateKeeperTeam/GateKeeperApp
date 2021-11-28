import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columnDefs = [
    {headerName: 'Employee ID', field: 'ID'},
    {headerName: 'User Name', field: 'userName'},
    {headerName: 'First Name', field: 'firstName'},
    {headerName: 'Phone Number', field: 'phoneNumber'},
    {headerName: 'Email', field: 'email'},
    
];

rowData = [
    {ID: '001', userName: 'TestTest', firstName: 'Test', lastName: 'Test', phoneNumber: '123-456-789', email: 'Test@test'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
