import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Constant } from '../constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent implements OnInit,AfterViewInit {
  @ViewChild('homeContainer') homeContainer!:ElementRef;
  @ViewChild('videoSource') videoSource!:ElementRef;
  videoPath="";
  constructor() { }

  ngOnInit(): void {


  }
  ngAfterViewInit():void{
    let size=this.homeContainer.nativeElement.offsetWidth;
    if(size>450){
      this.videoSource.nativeElement.src=Constant.videoL;
    }else{
      this.videoSource.nativeElement.src=Constant.videoS;
    }
  }

}
