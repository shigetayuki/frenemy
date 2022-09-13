import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../constant';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateLink(url:string){
    if(url==""){
      window.open(Constant.lineUrl);
    }else{
      this.router.navigate([url]);
    }
  }

}
