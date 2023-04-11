import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

homeSec1Info:any=null;
headline1:any=null;
headline2:any=null;
  constructor(private _homeService:HomeService) {
    
   }

  ngOnInit(): void {
    
AOS.init();
    
    this._homeService.getHome1stSection().subscribe(res=>{
this.homeSec1Info=res;
console.log(this.homeSec1Info);

    })


 
  
  }

}
