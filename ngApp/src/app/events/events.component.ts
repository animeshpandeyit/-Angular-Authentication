import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events = [
    {
      name: '',
      description: '',
      date: '',
    },
  ];
  constructor(private _eventService: EventService, private router: Router) {}
  ngOnInit(): void {
    this._eventService.getEvents().subscribe({
      next: (res) => (this.events = res),
      error: (err) => console.log(err),
    });
  }
}
