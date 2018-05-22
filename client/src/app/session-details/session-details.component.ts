import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionDetails } from '../models/sessionDetails';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

  public session: SessionDetails;
  constructor(private readonly _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe((data: { sessionDetails: SessionDetails }) => {
      this.session = data.sessionDetails;
    });
  }

}
