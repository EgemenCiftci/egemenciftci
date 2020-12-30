import {Injectable} from '@angular/core';
import * as data from 'src/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  private getData(): any {
    return data.default;
  }

  getArticles(): any[] {
    return this.getData().articles;
  }

  getTags(): any[] {
    return this.getData().tags;
  }
}
