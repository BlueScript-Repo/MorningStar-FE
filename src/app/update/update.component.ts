import { Component, OnInit } from '@angular/core';
import {Destinations} from './Destinations';
import {Subdestination} from './Subdestination'
import {PackageServiceService} from './../package-service.service';
import {DestOption} from './DestOption';
import {Stay} from './Stay';
import {Meal} from './Meal'
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
  destinationId:desti,
  name:subd,
  pincode:pin
})

}


// Stay
newStay:Stay[]=[]
stay1:DestOption[]=[
  {Id:"SUB1234",value:"Kullu"},
  {Id:"SUB6765",value:"Chandni Chowk"},
  {Id:"SUB2432",value:"City"},
  {Id:"SUB5645",value:"Bengaluru city"},
  {Id:"SUB4564",value:"Noida city"},
  {Id:"SUB5445",value:"manali"},
  {Id:"SUB6458",value:"Lonavla"},
]
addStay(stayForm:any){
var subdes=stayForm.subd;
var StayName=stayForm.stayName;
var Type=stayForm.stayType;
var AcNonAc=stayForm.acNonAc;
var StayRating=stayForm.rating

this.newStay.push({
  acNonAc:AcNonAc,
  rating:StayRating,
  stayName:StayName,
  stayType:Type,
  subDestinationId:subdes
})


}



// Meal

stayId:DestOption[]=[
  {Id:"STY1234",value:"Stay1"},
  {Id:"STY6765",value:"stay2"},
  {Id:"STY2432",value:"Stay3"},
  {Id:"STY5645",value:"Bengaluru Stay"},
  {Id:"STY4564",value:"Noida Stay"},
  {Id:"STY5445",value:"manali Stay"},
  {Id:"STY6458",value:"Lonavla Stay"},
]
newMeal:Meal[]=[];
addMeal(mealForm:any){
var stayID=mealForm.StayId;
var MealType=mealForm.mealType;
var Rate=mealForm.rate;
console.log(mealForm);

this.newMeal.push({
  mealsType:MealType,
  rate:Rate,
  stayId:stayID
})

}


}
