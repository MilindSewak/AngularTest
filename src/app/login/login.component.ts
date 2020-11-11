import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()login : Login

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.login = new Login();
  }
  ngOnInit(): void {
  }

  onSubmit(){

     if(this.login){
       if(this.login.password == '123456'){
        this.router.navigate(['/welcome']);
       }else{
        alert("Sorry Wrong Password")
       }

     }
  }
}
