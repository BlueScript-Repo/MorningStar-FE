import { Component, OnInit } from '@angular/core';
import { SelectedOption } from './../SelectedOption';
import { PackageServiceService } from './../package-service.service';
import { DailyItinerary } from './../DailyItinerary';
import { Package } from './../Package';
import { PackagePdfRequest } from './../PackagePdfRequest';
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
  mealOptions: any = {};

  optionSelectedSubDestinations: any = {};
  optionSelectedDestinations: any = {};
  optionSelectedStays: any = {};
  optionSelectedSights: any = {};
  optionSelectedMealOptions: any = {};
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

    this.dailyItinerary.push({
      checkIn: '',
      checkOut: '',
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

  getDestinations() {
    this.packageService.getDestinations().subscribe((res) => {
      console.log('Response is ' + res);
      this.destinations = res;
    });
  }

  getSubDestinations(key: SelectedOption) {
    this.packageService.getSubDestinations(key.key).subscribe((res) => {
      this.subDestinations = res;
    });
  }

  getStayAndSights(key: SelectedOption) {
    this.packageService.getStay(key.key).subscribe((res) => {
      this.stays = res;
    });

    this.packageService.getSightseeing(key.key).subscribe((res) => {
      this.sights = res;
    });
  }

  getMeals(key: SelectedOption) {
    this.packageService.getMeal(key.key).subscribe((res) => {
      this.mealOptions = res;
    });
  }

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
    this.getDestinations();
  }

}