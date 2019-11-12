import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {


  // @Input() blogTitre: string;
  // @Input() blogContenu: string;
  // @Input() blogLike: number;
  // @Input() blogDate: Date;

  posts = [
    {
      title: 'Post1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Post2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in metus sed ante sodales egestas eget sit amet purus.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Post3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies turpis sed tristique rutrum. Sed ut metus.',
      loveIts: 0,
      created_at: new Date()
    }
  ]

  constructor() { }

  ngOnInit() {
  }



}
