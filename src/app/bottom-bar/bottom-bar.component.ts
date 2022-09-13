import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../constant';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  changeTab(url:string):void{
    this.router.navigate([url])
  }
  clickIcon(icon :string):void{
    switch(icon){
      case 'line':
        window.open(Constant.lineUrl);
        break;
      case 'youtube':
        window.open(Constant.youtubeUrl);
        break;
      case 'twitter':
        window.open(Constant.twitterUrl);
        break;
      case 'instagram':
        window.open(Constant.instagramUrl);
        break;
      case 'tiktok':
        window.open(Constant.tiktokUrl);
        break;
      case 'facebook':
        window.open(Constant.facebookUrl);
        break;
    }
  }
}
