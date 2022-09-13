import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from '../constant';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @ViewChild('menuModalCantainer') menuModalCantainer!:ElementRef;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  homeRouting():void{
    this.router.navigate(['']);
  }
  openMenu(): void {
    let display=this.menuModalCantainer.nativeElement.style.display;
    if(display=='block'){
      this.menuModalCantainer.nativeElement.style.display='none';
    }else{
      this.menuModalCantainer.nativeElement.style.display='block';
    }
  }
  changeTab(tabName:string):void{
    if(tabName==""){
      window.open(Constant.lineUrl);
    }else if(tabName=="home"){
      this.router.navigate(['']);
    }else{
      this.router.navigate([tabName]);
    }
    let display=this.menuModalCantainer.nativeElement.style.display;
    if(display=='block'){
      this.menuModalCantainer.nativeElement.style.display='none';
    }
  }
}
