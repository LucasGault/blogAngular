import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() blogTitre: string;
  @Input() blogContenu: string;
  @Input() blogLike: number;
  @Input() blogDate: Date;

  constructor() { }

  ngOnInit() {
  }


  getColor() {

    if (this.blogLike > 0) {
      return 'green';
    } else if (this.blogLike < 0) {
      return 'red';
    }

  }


  onLike() {
    this.blogLike++;
  }

  onDislike() {
    this.blogLike--;
  }
}
