import { Component, OnInit } from '@angular/core';
import {Destinations} from './Destinations';
import {Subdestination} from './Subdestination'
import {PackageServiceService} from './../package-service.service'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private desti:PackageServiceService) { }

  ngOnInit(): void {
  }
  // addDestination(val:any){
  //   console.log(val);
  // }
    
  
  
  // Destination
  newDestination:Destinations[]=[];

  addDestination(destinationForm:any){
    var count=destinationForm.country;
    var dest=destinationForm.destination;
    var note=destinationForm.notes;
    var pin=destinationForm.pincode;
    var policy=destinationForm.policies;
console.log(destinationForm);
this.desti.saveDestination(destinationForm).subscribe((res)=>{
  console.log("result is "+res);
  
});
    this.newDestination.push({
      country:count,
      name:dest,
      notes:note,
      pinCode:pin,
      policies:policy,
      subDestination:''
    })
    count='';
  }
  


// SubDestination
newSubdestination:Subdestination[]=[];
addSubDestination(subdestinationForm:any){
var desti=subdestinationForm.destination;
var subd=subdestinationForm.Subdestination;
var pin=subdestinationForm.pincode;

this.newSubdestination.push({
  destinationId:desti,
  name:subd,
  pincode:pin
})

}


}
