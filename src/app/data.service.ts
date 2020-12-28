import {Injectable} from '@angular/core';
import * as data from 'src/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getData(): any {
    return data;
  }

  getArticles(): any[] {
    return (data as any).articles;
  }
}
