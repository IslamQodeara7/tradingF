import { NavbarService } from './../navbar.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  trueOrFalseList1: boolean[] = [];
  trueOrFalseList2: boolean[][] = [[], []];
  navbarList: any = null;
  navbarButton:any=null;
 
  constructor(private _NavbarService: NavbarService) { }

  ngOnInit(): void {
    this._NavbarService.getNavbarMenu().subscribe(res => {
      this.navbarList = res;
      console.log(res);
      
      for (let i = 0; i < this.navbarList.length; i++) {
        for (let j = 0; j < this.navbarList[i].sub_pages.length; j++) {

          this.trueOrFalseList1[i] = false;
          this.trueOrFalseList2[i][j] = false;
          console.log(this.trueOrFalseList2[i][j]);
          console.log(i,j);
          

        }

      }

    });

    this._NavbarService.getNavbarButton().subscribe((res) => {
    console.log(res);
    this.navbarButton=res[0];
    
    console.log(this.navbarButton);
    
    
    
    
      
    })
  }

}
