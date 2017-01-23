import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Post} from '../post.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {
  masterPosts: Post[] = [
    new Post("someUrlTitle", "http://www.web.com", "Someone", "1/23/2017"),
    new Post("someUrlTitle", "http://www.web.com", "Someone", "1/23/2017"),
    new Post("someUrlTitle", "http://www.web.com", "Someone", "1/23/2017")
  ];

  addPost(urlTitle:string, Url: string, author: string, timeStamp: any) {
   .push(new Post(urlTitle, Url, author, time));
 }


}
