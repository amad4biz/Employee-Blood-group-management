import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles:[
      `
      .active
      {
        color:#FFF !Important;
      }
      `
  ]
 ,
  
   templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
}
