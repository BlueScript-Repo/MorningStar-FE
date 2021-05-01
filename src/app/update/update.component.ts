import { Component, OnInit } from '@angular/core';
import {Destinations} from './Destinations';
import {Subdestination} from './Subdestination'
import {PackageServiceService} from './../package-service.service';
import {DestOption} from './DestOption';
import {Stay} from './Stay';
import {Meal} from './Meal';
import {Sightseeing} from './Sightseeing';
import {SelectedOption} from './../SelectedOption';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http:PackageServiceService) { }

  ngOnInit(): void {
    this.getDestinations1();
  }
    
  
  val='Mayur';
  newDestination:Destinations[]=[];

  addDestination(destinationForm:any){
    var count=destinationForm.country;
    var dest=destinationForm.destination;
    var note=destinationForm.notes;
    var pin=destinationForm.pincode;
    var policy=destinationForm.policies;
console.log(destinationForm);
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
    console.log(this.newDestination);
  }
  


// SubDestination
optionDestinations:any = {};
newSubdestination=[];
destination1:DestOption[]=[];


OnOptionSelect:any={};
onOptionSubdestination:any={};
subdestinationOptions:any={};
stayOptions:any={};
destinations:any={};


newSubdestinations:Subdestination[]=[];
addSubDestination(subdestinationForm:any){
var desti=subdestinationForm.destination;
var subd=subdestinationForm.Subdestination;
var pin=subdestinationForm.pincode;
var desc=subdestinationForm.Description
console.log(subdestinationForm);

this.newSubdestinations.push({
  key:'',
  description:desc,
  destinationId:desti.key,
  name:subd,
  pincode:pin
})
console.log(this.newSubdestinations);
}


newStay:Stay[]=[]

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
console.log(this.newStay);
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
  endTime:startdate,
  name:sight,
  rate:Rate,
  startTime:endDate,
  subDestinationId:subDesti.key
})
console.log(this.newSights);



}




title:any=" ";
add(){
  this.title="Hii...You've clicked button";
  localStorage.setItem("Token",this.title)
}
Clear(){
 this.val='';
}

postDestination(){
  this.http.postDestination(this.newDestination).subscribe((res)=>{
    console.log(res);
    
  })
}
destination_select:any={};
getDestinations1(){
  this.http.getDestinations1().subscribe((res)=>{
    console.log("Response is " + JSON.stringify(res));
  this.destination_select=res;   
  })
}
postSubd(){
  this.http.postSubd(this.newSubdestinations).subscribe((response)=>{
    console.log(response);
  })
}
getSubDestinations(val:SelectedOption){
  console.log(val.key);
  this.http.getSubDestinations(val.key).subscribe((response)=>{
    console.log(response);
    this.subdestinationOptions=response 
  })
  
}
stays:any={};
sights:any={};
getStayAndSights(key: any) {
    this.http.getStay(key.key).subscribe((res) => {
      this.stays = res;
      console.log(this.stays);
      
    });

    this.http.getSightseeing(key.key).subscribe((res) => {
      this.sights = res;
    });
    console.log(key.key);
    console.log(key.value);
}
postStay(){
this.http.postStay(this.newStay).subscribe((response)=>{
  console.log(response);  
})
}
newStayOptions:any={}
getStay(){
  this.http.getStay1().subscribe((res)=>{
    console.log(res);
    this.newStayOptions=res;
  })
}
postMeal(){
  this.http.postMeal(this.newMeal).subscribe((res)=>{
    console.log(res);
    
  })
}
postSight(){
  this.http.postSight(this.newSights).subscribe((res)=>{
    console.log(res);
    
  })
}
deleteTodo(id: number) {
  this.newMeal = this.newMeal.filter((v, i) => i != id);
  this.newDestination = this.newDestination.filter((v, i) => i != id);
  this.newSubdestinations = this.newSubdestinations.filter((v, i) => i != id);
  this.newStay = this.newStay.filter((v, i) => i != id);
  this.newSights = this.newSights.filter((v, i) => i != id);
}
}
