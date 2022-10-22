import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.css'],
})
export class SessionModalComponent implements OnInit {
  constructor() {}
  displayStyle: string = 'block';
  runTime!: number;

  ngOnInit(): void {
    this.timeOut(6);
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  timeOut(minute: number): void {
    setTimeout(() => {}, minute * 1000);

    this.runTime = minute;
  }
}
