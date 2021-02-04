import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  articleDate: string;
  articleTags: string[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.articleDate = new Date(this.article.date).toLocaleString();
    this.articleTags = this.article.tags?.map(f => this.dataService.getTags().find(g => g.id === f).name);
  }
}
