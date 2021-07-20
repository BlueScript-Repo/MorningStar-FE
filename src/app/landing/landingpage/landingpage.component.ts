import { Component, OnInit } from '@angular/core';
import {UserService} from './../../user/user.service'
import {Router} from '@angular/router';
import {PackageServiceService} from './../../package-service.service';
import {CMSServiceService} from "./../../cms-service.service";
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  imageList:any=[];


  constructor(public router: Router,public authenticate:UserService,public http:PackageServiceService,public imgService:CMSServiceService) { 

   
  
  
  }

  ngOnInit(): void {
    this.user=localStorage.getItem('user');
    console.log(this.user);
    this.loyaltypoints();
    
  if(this.role!='AGENT' && this.role!='USER' && this.role!='ADMIN'){
    this.value='null';
  }
  this.GetImages();
  }



  user:any='';
  loyalti:any;
  loyaltypoints(){
    this.http.getLoyaltiPoints(this.user).subscribe(res=>{
        this.loyalti=res;
        console.log(this.loyalti);
        
    })
  }





  getDomestic(val:any){
    alert("hiiii")
  }



  getData(){
    alert('Clicked on solo')
  }
  domestic:any=[];
  domesticImages:any=[];
  international:any=[];
  internationalImages:any=[];
  Themes:any=[];
  ThemesImages:any=[];
  leftSubsection:any=[];
  rightSubsection:any=[];
  GetImages(){
    this.imgService.getLandingPageSection1().subscribe(res=>{
      this.domestic=res;
      this.domestic=this.domestic.reverse();
      console.log(this.domestic);
      // for (let i = 0; i < this.domestic.length; i++) {
      //   const name = this.domestic[i].nameOnImage;
      //   const price=this.domestic[i].priceOnImage;
      //   const Url=this.domestic[i].s3url;
      //   this.domesticImages[i]={
      //     nameOnImage:name,
      //     priceOnImage:price,
      //     s3url:Url,
      //     show: false
      //   }
      //   console.log(this.domesticImages);
        
      // }
      
    })
    this.imgService.getLandingPageSection2().subscribe(res=>{
      this.international=res;
      this.international=this.international.reverse();
      console.log(this.international);
      // for (let i = 0; i < this.international.length; i++) {
      //   const name = this.international[i].nameOnImage;
      //   const price=this.international[i].priceOnImage;
      //   const Url=this.international[i].s3url;
      //   this.internationalImages[i]={
      //     nameOnImage:name,
      //     priceOnImage:price,
      //     s3url:Url,
      //     show: false
      //   }
      //   console.log(this.internationalImages);
        
      // }
      
    })
    this.imgService.getLandingPageSection3().subscribe(res=>{
      this.Themes=res;
      this.Themes=this.Themes.reverse();
      console.log(this.Themes);
      // for (let i = 0; i < this.Themes.length; i++) {
      //   const name = this.Themes[i].nameOnImage;
      //   const price=this.Themes[i].priceOnImage;
      //   const Url=this.Themes[i].s3url;
      //   this.ThemesImages[i]={
      //     nameOnImage:name,
      //     priceOnImage:price,
      //     s3url:Url,
      //     show: true
      //   }
      // }
      
    })
    this.imgService.getLandingPageSubSection1().subscribe(res=>{
      this.leftSubsection=res;
      this.leftSubsection=this.leftSubsection.reverse();
      console.log(this.leftSubsection);
    })
    this.imgService.getLandingPageSubSection2().subscribe(res=>{
      this.rightSubsection=res;
      this.rightSubsection=this.rightSubsection.reverse();
      console.log(this.rightSubsection);
    })
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
    this.router.navigate(['/ProductList/list']);
  }
productType:any='';
productCategory:any='';
  Navigate(destination:any){
    console.log(destination);
    this.productType='domestic';
    localStorage.setItem('productType',this.productType);
    localStorage.setItem('package',destination);
    this.router.navigate(['/ProductList/list']);
    console.log(this.productType);
    
  }
  navigateToInternational(InternationalDestination:any){
    this.productType='international';
    localStorage.setItem('productType',this.productType);
    console.log(InternationalDestination);
    localStorage.setItem('package',InternationalDestination);
    this.router.navigate(['/ProductList/list']);
    console.log(this.productType);
  }
  getCategory(val:any){
    console.log(val);
    this.productCategory=val.category;
    console.log(this.productCategory);
    localStorage.setItem('category',this.productCategory);
    this.router.navigate(['/ProductList/list']); 
  }

  
  getTags(tags:any){
    console.log(tags);
    this.http.setName(tags);
    this.router.navigate(['/ProductList/list']);
  }
}
