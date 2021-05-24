import { Component, OnInit } from '@angular/core';
import {UserService} from './../user/user.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public router: Router,public authenticate:UserService) { }

  ngOnInit(): void {
  if(this.role!='AGENT' && this.role!='USER' && this.role!='ADMIN'){
    this.value='null';
  }
  }
  role=localStorage.getItem('role');
  value='';
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      440: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items:5
      }
      // 1000: {
      //   items: 6
      // }
    },
  }
  customOptions1: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 700,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
       },
       200: {
         items: 2
       },
       300: {
         items: 3
       },
      400: {
        items: 4
      },
      500: {
        items:5
      },
      600: {
        items: 6
      },
      700:{
        items:7
      },
      800:{
        items:8
      },
      900:{
        items:9
      }
    },
  }
  nav(){
    this.router.navigate(['/packageList']);
  }
}

