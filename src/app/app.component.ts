import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Post1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. jfnerknfrekf rtirejptojrepto reijtpjertpo',
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

  constructor() {}

}
