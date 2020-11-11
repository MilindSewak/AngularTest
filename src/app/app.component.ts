import { Component, Input, NgModule} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';

  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  
  }


  navigateLogin(){
    this.router.navigate(['/login']);
  }
}
