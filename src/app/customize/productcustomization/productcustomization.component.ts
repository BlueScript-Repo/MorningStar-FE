import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from './../../package-service.service';
import { PackagePdfRequest } from './../../PackagePdfRequest';
import {DataList} from './DataList';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from './../../user/user.service'

@Component({
  selector: 'app-productcustomization',
  templateUrl: './productcustomization.component.html',
  styleUrls: ['./productcustomization.component.css']
})
export class ProductcustomizationComponent implements OnInit {

  constructor(private packageService: PackageServiceService,public authenticate:UserService) {}
  //MorningStar Changes
  userdata: any = {};
  destinationKey = '';
  title = '';
  destinations: any = {};
  stays: any = {};
  sights: any = {};
  meal: any = {};
subDestinations:any={}
  optionSelectedSubDestinations: any = {};
  optionSelectedDestinations: any = {};
  optionSelectedStays: any = {};
  optionSelectedSights: any = {};
  optionSelectedMealOptions: any = {};
  checkInDate:any={};
  checkOutDate:any={};
  dailyItinerary: any[] = [];
  package: any = {
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
}

   getStayAndSights(key: any) {
    console.log(key.key);
    console.log(key.value);
}
 
  deleteTodo(id: number) {
    this.dailyItinerary = this.dailyItinerary.filter((v, i) => i != id);
  }
  role:any;
  user:any;
  submitAndGeneratePDF(submitForm: any) {
    let air: string='';
    let Visa:string='';
    let username:string='';
    this.role=localStorage.getItem('role');
    this.user=localStorage.getItem('user');
    if (this.role=='ADMIN') {
          username=this.userdata.firstName + ' ' + this.userdata.lastName;
    }
    else{
      username=this.user;
    }
    if (submitForm.airTicket==true) {
      air="true";
    }
    else if (submitForm.airTicket==false){
      air="false";
    }
    
    if (submitForm.visa==true) {
      Visa="true";
    }
    else if (submitForm.visa==false){
      Visa="false";
    }
    this.package = {
      agent: 'Agent Vinod',
      airTickets: air,
      // airTickets: submitForm.airTicket,
      price: submitForm.price,
      user: username,
      visa:Visa,
      // visa: submitForm.visa,
      dailyItineraries: this.dailyItinerary,
    };

    this.packagePdfRequest = {
      destination: this.destination.name,
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
    this.getDestinations1();
    }

  desti:any={}
  getDestinations1(){
    return this.packageService.getDestinations1().subscribe((res=>{
      this.desti=res;
      console.log(res);
    }))
  }
  TotalData:DataList[]=[];
  destination:any={};
  getSubdestination(destinationForm:any){
    var destination1=destinationForm.destination;
    console.log(destination1);
    console.log("Calling of Get SubDestinations......."+JSON.stringify(destination1));
    this.packageService.getSubDestinations(destinationForm.key).subscribe((res) => {
      this.subDestinations = res;
      console.log(this.subDestinations);
    });
    this.destination={
      name:destination1
    }
    console.log("destination Array  "+JSON.stringify(this.destination.name));
    console.log("destination Array  "+JSON.stringify(this.destination));
  }
  subdestination:any={};
  getStay(subDestinationForm:any){
    var subdestination1=subDestinationForm.Subdestination;
    this.packageService.getStay(subDestinationForm.key).subscribe((res) => {
      console.log("Calling Get Stay Function........."+JSON.stringify(res));
      this.stays = res;
      console.log(this.stays);
    });

    this.subdestination={
      name:subdestination1
    }
    console.log("Subdestination Array: " + JSON.stringify(this.subdestination));
  }
 
stay:any={};
getMeal(stayForm:any){
  var stay1=stayForm.stay;
  console.log(stayForm);
  
  console.log(stay1);
  console.log(stayForm.key);
  
  this.packageService.getMeal(stayForm.key).subscribe((res) => {
    console.log("Calling GetMeal Function........."+JSON.stringify(res));
    this.meal=res;
    console.log(this.meal);
    
  })
    this.stay={
      name:stay1
    }
    console.log("Stay array: " + JSON.stringify(this.stay));
}
getSight(subdestination1:any){
this.packageService.getSightseeing(subdestination1).subscribe((res) => {
  console.log(res);
  console.log("Calling get Sightseeing--->"+JSON.stringify(res));
  this.sights=res;  
  console.log(this.sights);
  
})
}
meal1:any={};
showMeal(mealForm:any){
  console.log(mealForm);
  var meal2=mealForm.meal;
  console.log(meal2);
  
  this.meal1={
    name:meal2
  }
console.log(this.meal);
}

sight:DataList[]=[];
showSight(sightForm:any){
  console.log(sightForm);
  var sight1=sightForm.sight;
  console.log(sight1);
    this.sight.push(
    sight1
    )
    console.log("Sight array: " + JSON.stringify(this.sight));
   
}

AddData:DataList[]=[];

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

totalForm=new FormGroup({
  carousel:new FormGroup({
    destination:new FormControl(''),
    key:new FormControl('')
  })
});
getvalue(name:any,key:any){
  console.log(name);
  console.log(key);   
}
newdata(){
  console.log(this.totalForm.value);  
}

showModal(){
  document.getElementById("popup-open-btn")?.addEventListener("click",function() {
  document.getElementsByClassName("popup")[0].classList.add("active")
})
}
closeModal(){
document.getElementById("dismiss-popup-btn")?.addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active")
})
}
showModal1(){
  document.getElementById("popup1-open-btn")?.addEventListener("click",function() {
  document.getElementsByClassName("popup1")[0].classList.add("active")
})
}
closeModal1(){
  document.getElementById("dismiss-popup1-btn")?.addEventListener("click",function(){
    document.getElementsByClassName("popup1")[0].classList.remove("active")
  })
  }

  showModal2(){
    document.getElementById("popup2-open-btn")?.addEventListener("click",function() {
    document.getElementsByClassName("popup2")[0].classList.add("active")
  })
  }
  closeModal2(){
    document.getElementById("dismiss-popup2-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup2")[0].classList.remove("active")
    })
    }

    showModal3(){
      document.getElementById("popup3-open-btn")?.addEventListener("click",function() {
      document.getElementsByClassName("popup3")[0].classList.add("active")
    })
    }
    closeModal3(){
      document.getElementById("dismiss-popup3-btn")?.addEventListener("click",function(){
        document.getElementsByClassName("popup3")[0].classList.remove("active")
      })
      }


      showModal4(){
        document.getElementById("popup4-open-btn")?.addEventListener("click",function() {
        document.getElementsByClassName("popup4")[0].classList.add("active")
      })
      }
      closeModal4(){
        document.getElementById("dismiss-popup4-btn")?.addEventListener("click",function(){
          document.getElementsByClassName("popup4")[0].classList.remove("active")
        })
        }

        ShowData(){
          let sightString:string='';
          for (let i = 0; i < this.sight.length; i++) {
             sightString = sightString+","+this.sight[i];
           }
           console.log(sightString);
           
          this.dailyItinerary.push({
      checkIn: "20/12/22",
      checkOut: "23/12/22",
      day: '',
      // destination: this.destination.name,
      meal: this.meal1.name,
      sightSeeing:sightString,
      stay: this.stay.name,
      subDestination: this.subdestination.name,
      packageId: '',
      deleted: false,
      dailyItineraryId: ''
      // place: this.destination.name
    });
    console.log("This is DailyItinerary Array: " + JSON.stringify(this.dailyItinerary));
    this.destination={};
    this.meal1={};
    this.sight=[];
    this.subdestination={};
    this.stay={};

        }




        next(){
          document.getElementById('next1')?.addEventListener('click',function(){
            document.getElementsByClassName('Form1')[0].classList.add('active');
            document.getElementsByClassName('Form2')[0].classList.add('active');
            document.getElementById('progress')?.classList.add('active');
          })
        }
       
        back(){
          document.getElementById('back1')?.addEventListener('click',function(){
            document.getElementsByClassName('Form2')[0].classList.remove('active');
            document.getElementsByClassName('Form1')[0].classList.remove('active');
            document.getElementById('progress')?.classList.remove('active');
          })
        }
        next1(){
          document.getElementById('next2')?.addEventListener('click',function(){
            document.getElementsByClassName('Form2')[0].classList.add('active1');
            document.getElementsByClassName('Form3')[0].classList.add('active');
            document.getElementById('progress')?.classList.add('active1');
          })
        }
        back1(){
          document.getElementById('back2')?.addEventListener('click',function(){
            document.getElementsByClassName('Form3')[0].classList.remove('active');
            document.getElementsByClassName('Form2')[0].classList.remove('active1');
            document.getElementById('progress')?.classList.remove('active1');
          })
        }
        next2(){
          document.getElementById('next3')?.addEventListener('click',function(){
            document.getElementsByClassName('Form3')[0].classList.add('active1');
            document.getElementsByClassName('Form4')[0].classList.add('active');
            document.getElementById('progress')?.classList.add('active2');
          })
        }
        back2(){
          document.getElementById('back3')?.addEventListener('click',function(){
            document.getElementsByClassName('Form4')[0].classList.remove('active');
            document.getElementsByClassName('Form3')[0].classList.remove('active1');
            document.getElementById('progress')?.classList.remove('active2');
          })
        }
        next3(){
          document.getElementById('next4')?.addEventListener('click',function(){
            document.getElementsByClassName('Form4')[0].classList.add('active1');
            document.getElementsByClassName('Form5')[0].classList.add('active');
            document.getElementById('progress')?.classList.add('active3');
          })
        }
        back3(){
          document.getElementById('back4')?.addEventListener('click',function(){
            document.getElementsByClassName('Form5')[0].classList.remove('active');
            document.getElementsByClassName('Form4')[0].classList.remove('active1');
            document.getElementById('progress')?.classList.remove('active3');
          })
        }
        next4(){
          document.getElementById('next5')?.addEventListener('click',function(){
            document.getElementsByClassName('Form5')[0].classList.add('active1');
            document.getElementsByClassName('Form6')[0].classList.add('active');
            document.getElementById('progress')?.classList.add('active4');
          })
        }
        back4(){
          document.getElementById('back5')?.addEventListener('click',function(){
            document.getElementsByClassName('Form6')[0].classList.remove('active');
            document.getElementsByClassName('Form5')[0].classList.remove('active1');
            document.getElementById('progress')?.classList.remove('active4');
          })
        }
}
