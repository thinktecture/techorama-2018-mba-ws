import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionDetailsResolver } from './resolvers/sessiondetails-resolver';

export const APP_ROUTES = [
  { path: '', component: SessionListComponent },
  {
    path: ':id',
    component: SessionDetailsComponent,
    resolve: { sessionDetails: SessionDetailsResolver }
  }];
