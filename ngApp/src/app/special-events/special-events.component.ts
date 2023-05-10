import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [
    {
      name: '',
      description: '',
      date: '',
    },
  ];
  constructor(private _eventService: EventService, private router: Router) {}
  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe({
      next: (res) => (this.specialEvents = res),
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      },
    });
  }
}
