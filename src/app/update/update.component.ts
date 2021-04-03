import { Component, OnInit } from '@angular/core';
import {Destinations} from './Destinations';
import {Subdestination} from './Subdestination'
import {PackageServiceService} from './../package-service.service';
import {DestOption} from './DestOption';
import {Stay} from './Stay';
import {Meal} from './Meal';
import {Sightseeing} from './Sightseeing'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private desti:PackageServiceService) { }

  ngOnInit(): void {
    // this.getDestinations1();
    // this.getSubDestinations1();
    // this.getStay();
    // this.title=localStorage.getItem('Token');

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
      // key:"",
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
// destination1:DestOption[]=[];

// OnOptionSelect(val:any){

// }
OnOptionSelect:any={};
subdestinationOptions:any={};
stayOptions:any={};

addSubDestination(subdestinationForm:any){
var desti=subdestinationForm.destination;
var subd=subdestinationForm.Subdestination;
var pin=subdestinationForm.pincode;

console.log(subdestinationForm);
console.log(desti.name);

this.newSubdestination.push({
  key:'',
  note:'',
  destinationId:desti.name,
  name:subd,
  pincode:pin
})

}


// Stay
newStay:Stay[]=[]
subdesti:DestOption[]=[
  {key:"SUB1234",value:"Kullu"},
  {key:"SUB6765",value:"Chandni Chowk"},
  {key:"SUB2432",value:"City"},
  {key:"SUB5645",value:"Bengaluru city"},
  {key:"SUB4564",value:"Noida city"},
  {key:"SUB5445",value:"manali"},
  {key:"SUB6458",value:"Lonavla"},
]
addStay(stayForm:any){
var desti=stayForm.destination;
var subdes=stayForm.subd;
var name=stayForm.name;
var Type=stayForm.stayType;
var AcNonAc=stayForm.acNonAc;
var StayRating=stayForm.rating
console.log(stayForm);

this.newStay.push({
  destinationId:desti.key,
  subDestinationId:subdes.key,
  key:"",
  name:name,
  note:"",
  acNonAc:AcNonAc,
  rating:StayRating,
  stayType:Type
})


}



// Meal

newMeal:Meal[]=[];
addMeal(mealForm:any){
var desti=mealForm.destination;
var stayID=mealForm.StayId;
var MealType=mealForm.mealType;
var Rate=mealForm.rate;
console.log(mealForm);

this.newMeal.push({
  destinationId:desti.key,
  name:MealType,
  rate:Rate,
  stayId:stayID.key
})

}


// SightSeeing
newSights:Sightseeing[]=[];
addSight(sightForm:any){
  var desti=sightForm.destination;
  var subDesti=sightForm.subdestination;
  var sight=sightForm.sightName;
  var startdate=sightForm.start;
  var endDate=sightForm.end;
  var Rate=sightForm.rate;


this.newSights.push({
  destinationId:desti.key,
  endTime:endDate,
  name:sight,
  rate:Rate,
  startTime:startdate,
  subDestinationId:subDesti.key
})


}




title:any=" ";
add(){
  this.title="Hii...You've clicked button";
  localStorage.setItem("Token",this.title)
}


postDestination(){
  this.desti.postDestination(this.newDestination).subscribe((res)=>{
    console.log(res);
    
  })
}
destination_select:any={};
getDestinations1(){
  this.desti.getDestinations1().subscribe((res)=>{
    console.log("Response is " + JSON.stringify(res));
  this.destination_select=res;   
  })
}
postSubd(){
  this.desti.postSubd(this.newSubdestination).subscribe((response)=>{
    console.log(response);
  })
}

newsubdestination:any={};
getSubDestinations1(){
  this.desti.getSubDestinations1().subscribe((response)=>{
    console.log(response);
    this.newsubdestination=response;    
  })
}
postStay(){
this.desti.postStay(this.newStay).subscribe((response)=>{
  console.log(response);  
})
}
newStayOptions:any={}
getStay(){
  this.desti.getStay1().subscribe((res)=>{
    console.log(res);
    this.newStayOptions=res;
  })
}
postMeal(){
  this.desti.postMeal(this.newMeal).subscribe((res)=>{
    console.log(res);
    
  })
}
postSight(){
  this.desti.postSight(this.newSights).subscribe((res)=>{
    console.log(res);
    
  })
}
deleteTodo(id: number) {
  this.newMeal = this.newMeal.filter((v, i) => i != id);
  this.newDestination = this.newDestination.filter((v, i) => i != id);
  this.newSubdestination = this.newSubdestination.filter((v, i) => i != id);
  this.newStay = this.newStay.filter((v, i) => i != id);
  this.newSights = this.newSights.filter((v, i) => i != id);
}
}
