import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  collection = []
  p:number = 1;
  constructor(public httpService: HttpService) {

  //    for(let i=0;i <=20;i++){
  //   this.collection.push("Angular "+i+".0");
  //  }
  //  console.log(this.collection)
  this.ngOnInit()
  }

  ngOnInit(): void {
    console.log("ngOnInit:-- ")
    this.httpService.sendGetRequest().subscribe((responseBody) => {
      this.collection = responseBody;
      console.log(responseBody);
    });

    }

}
