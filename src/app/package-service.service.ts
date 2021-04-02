import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Package } from './Package';
import { PackagePdfRequest } from './PackagePdfRequest';

@Injectable({
  providedIn: 'root',
})
export class PackageServiceService {

token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

       httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization:`Bearer `+this.token
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
    let desti_url=this.baseUrl+"destination"
    return this.http.get(desti_url, this.httpOptions);
  }

  getSubDestinations1(){
    console.log("Getting Subdestination.......");
    let url=this.baseUrl+"subdestination";
    return this.http.get(url);
  }

  getStay1(){
    console.log("Getting stay.......");
    let url=this.baseUrl+"stay";
    return this.http.get(url);
    
  }

  getDestinations() {
    // console.log('Calling backend');
    let url1 = this.baseUrl + 'destination';
    return this.http.get(url1,this.httpOptions);
  }

  getSubDestinations(destinationKey: string) {
    let url2 = this.baseUrl + 'subDestination/destinationId/' + destinationKey;
    return this.http.get(url2, this.httpOptions);
  }

  getStay(stay: string) {
    let url3 = this.baseUrl + 'stay/subDestinationId/' + stay;
    return this.http.get(url3, this.httpOptions);
  }

  getSightseeing(sightseeing: string) {
    let url5 = this.baseUrl + 'sightseeing/subDestinationId/' + sightseeing;
    return this.http.get(url5, this.httpOptions);
  }

  getMeal(meal: string) {
    let url4 = this.baseUrl + 'meal/stayId/' + meal;
    return this.http.get(url4, this.httpOptions);
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
    return this.http.post(url_destination,data, this.httpOptions)
  }


  testFunction()
  {
    console.log("TestFunction");
    
  }
  postDestination(data:any){
    let post_url =this.baseUrl+"destination";
    console.warn("save destination" ,JSON.stringify(data));
    return this.http.post(post_url,data, this.httpOptions);
  
  }
  postSubd(data:any){
    let post_url=this.baseUrl+"subdestination";
    console.log("Post Subdestination works "+JSON.stringify(data));
  return this.http.post(post_url,data, this.httpOptions);
  }

  postStay(data:any){
    let post_stay=this.baseUrl+"stay";
    console.log("post Stay "+JSON.stringify(data));
  return this.http.post(post_stay,data, this.httpOptions);    
  }

  postMeal(data:any){
    let post_meal=this.baseUrl+"meal";
    console.log("Posting Meal....."+JSON.stringify(data));
    return this.http.post(post_meal,data, this.httpOptions);
  }
  postSight(data:any){
    let post_sight=this.baseUrl+"sightseeing";
    console.log("Post Sightseeing....."+JSON.stringify(data));
    return this.http.post(post_sight,data, this.httpOptions);
    
  }
}
