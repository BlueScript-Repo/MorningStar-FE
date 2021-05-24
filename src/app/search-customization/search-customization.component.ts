import { Component, OnInit } from '@angular/core';
import {PackageServiceService} from './../package-service.service';

@Component({
  selector: 'app-search-customization',
  templateUrl: './search-customization.component.html',
  styleUrls: ['./search-customization.component.css']
})
export class SearchCustomizationComponent implements OnInit {

  constructor(private http:PackageServiceService) { }

  ngOnInit(): void {
  }
  destinations:any={};
  searchApi(val:any){
    console.log(val.value);
    let keyword=val.value;
    this.http.searchDestination(keyword).subscribe((res)=>{
      console.log(res);
      this.destinations=res;
    })
    console.log(this.destinations);
    
  }

  GetDestination(value:any){
    console.log(value); 
  }
}
