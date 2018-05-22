import { Speaker } from "./speaker";

export class SessionDetails {
  public id: string;
  public title: string;
  public description: string;
  public level: number;
  public speakers: Array<Speaker>;
}
