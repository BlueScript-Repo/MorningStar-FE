import { Component, OnInit } from '@angular/core';
import { SelectedOption } from './../SelectedOption';
import { PackageServiceService } from './../package-service.service';
import { DailyItinerary } from './../DailyItinerary';
import { Package } from './../Package';
import { PackagePdfRequest } from './../PackagePdfRequest';
import {DataList} from './DataList'
@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {
  
  constructor(private packageService: PackageServiceService) {}
  //MorningStar Changes
  userdata: any = {};
  destinationKey = '';
  title = '';

  subDestinations: any = {};
  destinations: any = {};
  stays: any = {};
  sights: any = {};
  meal: any = {};

  optionSelectedSubDestinations: any = {};
  optionSelectedDestinations: any = {};
  optionSelectedStays: any = {};
  optionSelectedSights: any = {};
  optionSelectedMealOptions: any = {};
  checkInDate:any={};
  checkOutDate:any={};
  dailyItinerary: DailyItinerary[] = [];
  package: Package = {
    agent: '',
    airTickets: '',
    price: '',
    user: '',
    visa: '',
    dailyItineraries: [],
  };
  packagePdfRequest: PackagePdfRequest = {
    destination: '',
    fistName: '',
    lastName: '',
    lengthOfStay: '0',
    minimumNumberOfPax: '',
    roomType: '',
    travelDate: '',
    dayIternares: [],
  };

  showTable() {
    //document.getElementById('t1').style.visibility = 'visible';
  }

  getUserData2(user: any) {
    console.log('contact number is ' + user);
    this.packageService.getUserData(user).subscribe((res) => {
      this.userdata = res;
      console.log(res);
    });
  }

  addData(dayForm: any) {
    let dest = dayForm.destination.name;
    let subDest = dayForm.subDestination.name;
    let stay = dayForm.stay.name;
    let meal = dayForm.meals.name;
    let sight = dayForm.sightSeeing.name;
    let checkIn = dayForm.checkIn;
    let checkOut=dayForm.checkOut;

    this.dailyItinerary.push({
      checkIn: checkIn,
      checkOut: checkOut,
      day: '',
      destination: dest,
      meal: meal,
      sightSeeing: sight,
      stay: stay,
      subDestination: subDest,
      packageId: '',
      deleted: false,
      dailyItineraryId: '',
      place: dest,
    });
  }

  // getDestinations() {
  //   this.packageService.getDestinations().subscribe((res) => {
  //     console.log('Response is ' + res);
  //     this.destinations = res;
  //   });
  // }

  getSubDestinations(key: SelectedOption) {
    this.packageService.getSubDestinations(key.key).subscribe((res) => {
      this.subDestinations = res;
    });
  }

  // getStayAndSights(key: SelectedOption) {
  //   this.packageService.getStay(key.key).subscribe((res) => {
  //     this.stays = res;
  //   });

  //   this.packageService.getSightseeing(key.key).subscribe((res) => {
  //     this.sights = res;
  //   });
  // }

  // getMeals(key: SelectedOption) {
  //   this.packageService.getMeal(key.key).subscribe((res) => {
  //     this.mealOptions = res;
  //   });
  // }

  deleteTodo(id: number) {
    this.dailyItinerary = this.dailyItinerary.filter((v, i) => i != id);
  }

  submitAndGeneratePDF(submitForm: any) {
    this.package = {
      agent: 'Agent Vinod',
      airTickets: submitForm.airTicket,
      price: submitForm.price,
      user: this.userdata.firstName + ' ' + this.userdata.lastName,
      visa: submitForm.visa,
      dailyItineraries: this.dailyItinerary,
    };

    this.packagePdfRequest = {
      destination: this.dailyItinerary[0].destination,
      fistName: this.userdata.firstName,
      lastName: this.userdata.lastName,
      lengthOfStay: this.dailyItinerary.length + '',
      minimumNumberOfPax: '2',
      roomType: 'TestRoom',
      travelDate: '03/12/2021',
      dayIternares: this.dailyItinerary,
    };

    this.packageService.createPackage(this.package).subscribe((res) => {
      console.log(res);
    });

    this.packageService.geenratePDF(this.packagePdfRequest).subscribe((res) => {
      console.log('before download');

      let file = new Blob([res as BlobPart], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      console.log('after download');
    });
  }

  SubmitData(value: any) {}



  ngOnInit(): void {
    // this.getDestinations();
    // this.getDestinations1();
    // this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    this.getDestinations1();
    // this.getSubDestinations1(this.destinationForm);
  }

  desti:any={}
  getDestinations1(){
    return this.packageService.getDestinations1().subscribe((res=>{
      this.desti=res;
      console.log(res);
    }))
  }
  TotalData:DataList[]=[];
  destination:DataList[]=[];
  getSubdestination(destinationForm:any){
    // console.log(destination1);
    var destination1=destinationForm.destination;
    console.log(destinationForm);
    console.log(destination1);
    console.log("Calling of Get SubDestinations......."+JSON.stringify(destination1));
    this.packageService.getSubDestinations(destinationForm).subscribe((res) => {
      console.log(res);
      console.log("Hiiiiiiiiiiiiiiiiiii"+JSON.stringify(res));
      this.subDestinations = res;
      console.log(this.subDestinations);
    });
    this.destination.push({
      name:destination1
    })
  }
  subdestination:DataList[]=[];
  getStay(subDestinationForm:any){
    var subdestination1=subDestinationForm.Subdestination;
    console.log(subDestinationForm);
    console.log(subdestination1);
    // console.log(subdestination1.key);
    // console.log(JSON.stringify(subdestination1));
    this.packageService.getStay(subDestinationForm).subscribe((res) => {
      console.log("Calling Get Stay Function........."+JSON.stringify(res));
      this.stays = res;
      console.log(this.subDestinations);
    });

    this.subdestination.push({
      name:subdestination1
    })
    
  }
 
stay:DataList[]=[];
getMeal(stayForm:any){
  var stay1=stayForm.stay;
  console.log(stayForm);
  
  console.log(stay1);
  this.packageService.getMeal(stayForm).subscribe((res) => {
    console.log("Calling GetMeal Function........."+JSON.stringify(res));
    this.meal=res;
    console.log(this.stays);
    
  })
    this.stay.push({
      name:stay1
    })
}
getSight(subdestination1:any){
this.packageService.getSightseeing(subdestination1).subscribe((res) => {
  console.log(res);
  console.log("Calling get Sightseeing--->"+JSON.stringify(res));
  this.sights=res;  
  console.log(this.sights);
  
})
}
meal1:DataList[]=[];
showMeal(mealForm:any){
  console.log(mealForm);
  var meal2=mealForm.meal;
  console.log(meal2);
  
  this.meal1.push({
    name:meal2
  })

}

sight:DataList[]=[];
showSight(sightForm:any){
  console.log(sightForm);
  var sight1=sightForm.sight;
  console.log(sight1);
    this.sight.push({
      name:sight1
    })
}
AddData:DataList[]=[];
ShowData(){
  this.TotalData=this.destination.concat(this.subdestination);
  console.log(this.TotalData);
  this.TotalData=this.TotalData.concat(this.stay);
  console.log(this.TotalData);
  this.TotalData=this.TotalData.concat(this.meal1);
  console.log(this.TotalData);
  this.AddData=this.TotalData.concat(this.sight);
  console.log(this.AddData);
  
}

title1 = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';

carouselOptions = {
  margin: 125,
  nav: true,
  navText: ["<div class='nav-btn prev-slide fas fa-arrow-circle-left'></div>", "<div class='nav-btn next-slide fas fa-arrow-circle-right'></div>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },

  }
}
carouselOptions1 = {
  margin: 105,
  nav: true,
  navText: ["<div class='nav-btn prev-slide fas fa-arrow-circle-left'></div>", "<div class='nav-btn next-slide fas fa-arrow-circle-right'></div>"],
  responsiveClass: true,
  responsive: {
    800: {
      items: 1,
      nav: true,
      loop: true
    }
  }
}


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
    //  200: {
    //    items: 2
    //  },
    //  440: {
    //    items: 3
    //  },
    //  600: {
    //    items: 4
    //  },
    // 800: {
    //   items:5
    // },
    // 1000: {
    //   items: 6
    // }
  },
}


}
