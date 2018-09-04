import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public static get BASE_API_URL(): string { return "http://localhost:8080"; };
}
