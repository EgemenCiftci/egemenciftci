import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../page.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() selectedPage: Page = Page.home;

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateHome(): void {
    this.selectedPage = Page.home;
  }

  navigateAbout(): void {
    this.selectedPage = Page.about;
  }

  navigateContact(): void {
    this.selectedPage = Page.contact;
  }
}
