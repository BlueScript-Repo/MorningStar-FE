import { Component, OnInit } from '@angular/core';
import {Destinations} from './Destinations';
import {Subdestination} from './Subdestination'
import {PackageServiceService} from './../package-service.service';
import {DestOption} from './DestOption'
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
// // this.desti.saveDestination(destinationForm).subscribe((res)=>{
// //   console.log("result is "+res);
  
// });
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
optionDestinations:any = {};
newSubdestination:Subdestination[]=[];
destination1:DestOption[]=[
  {Id:"DEST1234",value:"Kashmir"},
  {Id:"DEST6765",value:"Delhi"},
  {Id:"DEST2432",value:"NewYork"},
  {Id:"DEST5645",value:"Bengaluru"},
  {Id:"DEST4564",value:"Noida"},
  {Id:"DEST5445",value:"Dalhousie"},
  {Id:"DEST6458",value:"Amritsar"},
];

OnOptionSelect(val:any){
}

addSubDestination(subdestinationForm:any){
var desti=subdestinationForm.destination;
var subd=subdestinationForm.Subdestination;
var pin=subdestinationForm.pincode;

console.log(subdestinationForm);
console.log(desti.value);

this.newSubdestination.push({
  destinationId:desti.value,
  name:subd,
  pincode:pin
})

}


}
