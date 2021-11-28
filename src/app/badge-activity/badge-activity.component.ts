import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-badge-activity',
  templateUrl: './badge-activity.component.html',
  styleUrls: ['./badge-activity.component.css']
})
export class BadgeActivityComponent implements OnInit {

  constructor() { }
  columnDefs = [
    {headerName: 'Employee ID', field: 'ID'},
    {headerName: 'Badge Reader ID', field: 'badgeReader'},
    {headerName: 'Location', field: 'location'},
    {headerName: 'date/time', field: 'dateTime'},
    {headerName: 'Pass/Fail', field: 'passFail'},
    
];

rowData = [
  {ID: "test", badgeReader: '000-1', location: 'Main Lobby', dateTime: '01/01/21 @ 13:05', passFail: 'Pass'},
  

];
  ngOnInit(): void {
  }

}
