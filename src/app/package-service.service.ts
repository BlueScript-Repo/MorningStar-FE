import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Package } from './Package';
import { PackagePdfRequest } from './PackagePdfRequest';

@Injectable({
  providedIn: 'root',
})
export class PackageServiceService {
  constructor(private http: HttpClient) {}
      // t=`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc21pdGFnYXZoYW5lMDZAZ21haWwuY29tIiwiZXhwIjoxNjE2Njk3MjY3LCJpYXQiOjE2MTY2NzkyNjd9.eP8lr5SCJL0Xr19VGv11VkNE4YF2tclKLEjJKxH9gMg`;
      
       httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc21pdGFnYXZoYW5lMDZAZ21haWwuY29tIiwiZXhwIjoxNjE2Njk3MjY3LCJpYXQiOjE2MTY2NzkyNjd9.eP8lr5SCJL0Xr19VGv11VkNE4YF2tclKLEjJKxH9gMg`
        })
      }
      
       


  baseUrl =
    'http://morningstarapis-env.eba-k8smp6gh.ap-south-1.elasticbeanstalk.com/';
  
  
  
    getUserData(user: any) {
    let url_user = this.baseUrl + 'user/contact/' + user;
    return this.http.get(url_user,this.httpOptions);
  }
  getDestinations1(){
    console.log("Getting Destinations....");
    let desti_url="http://localhost:3000/destination"
    return this.http.get(desti_url);
  }

  getSubDestinations1(){
    console.log("Getting Subdestination.......");
    let url="http://localhost:3000/subdestination";
    return this.http.get(url);
  }

  getStay1(){
    console.log("Getting stay.......");
    let url="http://localhost:3000/stay";
    return this.http.get(url);
    
  }

  getDestinations() {
    // console.log('Calling backend');
    let url1 = this.baseUrl + 'destination';
    return this.http.get(url1,this.httpOptions);
  }

  getSubDestinations(destinationKey: string) {
    let url2 = this.baseUrl + 'subDestination/destinationId/' + destinationKey;
    return this.http.get(url2);
  }

  getStay(stay: string) {
    let url3 = this.baseUrl + 'stay/subDestinationId/' + stay;
    return this.http.get(url3);
  }

  getSightseeing(sightseeing: string) {
    let url5 = this.baseUrl + 'sightseeing/subDestinationId/' + sightseeing;
    return this.http.get(url5);
  }

  getMeal(meal: string) {
    let url4 = this.baseUrl + 'meal/stayId/' + meal;
    return this.http.get(url4);
  }

  createPackage(userPackage: Package) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    let url4 = this.baseUrl + 'package';
    return this.http.post(url4, JSON.stringify(userPackage), {
      headers: headers,
    });
  }

  geenratePDF(userPackage: PackagePdfRequest) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    let url4 = this.baseUrl + 'pdfGenerate';
    return this.http.post(url4, JSON.stringify(userPackage), {
      headers: headers,
      responseType: 'blob',
    });
  }

  saveDestination(data:any){
    let url_destination = this.baseUrl +'destination'
    console.warn("save destination" ,data);
    return this.http.post(url_destination,data)
  }


  testFunction()
  {
    console.log("TestFunction");
    
  }
  postDestination(data:any){
    let post_url ="http://localhost:3000/destination";
    console.warn("save destination" ,JSON.stringify(data));
    return this.http.post(post_url,data);
  
  }
  postSubd(data:any){
    let post_url="http://localhost:3000/subdestination";
    console.log("Post Subdestination works "+JSON.stringify(data));
  return this.http.post(post_url,data);
  }

  postStay(data:any){
    let post_stay="http://localhost:3000/stay";
    console.log("post Stay "+JSON.stringify(data));
  return this.http.post(post_stay,data);    
  }

  postMeal(data:any){
    let post_meal="http://localhost:3000/meal";
    console.log("Posting Meal....."+JSON.stringify(data));
    return this.http.post(post_meal,data);
  }
  postSight(data:any){
    let post_sight="http://localhost:3000/sightseeing";
    console.log("Post Sightseeing....."+JSON.stringify(data));
    return this.http.post(post_sight,data);
    
  }
}
