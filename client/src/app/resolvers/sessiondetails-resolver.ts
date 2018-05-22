import { SessionDetails } from "../models/sessionDetails";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from "rxjs";
import { SessionsService } from "../sessions.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SessionDetailsResolver implements Resolve<SessionDetails> {
  constructor(private readonly _sessionsService: SessionsService) {

  }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): SessionDetails | Observable<SessionDetails> | Promise<SessionDetails> {

    const sessionId = route.paramMap.get('id');
    return this._sessionsService.getSessionDetails(sessionId);
  }
}
