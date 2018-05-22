import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionOverview } from './models/sessionOverview';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { SessionDetails } from './models/sessionDetails';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private readonly _http: HttpClient) {

  }

  public getSessions(): Observable<Array<SessionOverview>> {
    return this._http.get<Array<SessionOverview>>(environment.apiRoot);
  }

  public getSessionDetails(sessionId: string): Observable<SessionDetails> {
    const url = `${environment.apiRoot}${sessionId}`;

    return this._http.get<SessionDetails>(url);
  }
}
