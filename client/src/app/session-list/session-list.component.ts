import { Component, OnInit } from '@angular/core';
import { SessionOverview } from '../models/sessionOverview';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  public sessions: Array<SessionOverview>;

  constructor(private readonly _sessionsService: SessionsService) { }

  ngOnInit() {
    this._sessionsService.getSessions()
      .subscribe((sessionOverviews) => this.sessions = sessionOverviews);
  }

}
