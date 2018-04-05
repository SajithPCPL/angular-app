import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  content='';
  constructor(private _http:Http)
  {

  }
  
   ngOnInit() {
     this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts/3078')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.title = data.title;
                        this.content = data.content;
                        console.log(data);
                });
  }
}
