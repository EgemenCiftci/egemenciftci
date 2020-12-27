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

  getAboutContent(): string {
    return (data as any).about;
  }

  getContactContent(): string {
    return (data as any).contact;
  }

  getArticles(): any[] {
    return (data as any).home;
  }
}
