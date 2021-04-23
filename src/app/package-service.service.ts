import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { Package } from './Package';
import { PackagePdfRequest } from './PackagePdfRequest';

@Injectable({
  providedIn: 'root',
})
export class PackageServiceService {
  productDetails:any;


token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

    setArray(data:any){
      this.productDetails=data
    }
    getArray(){
      return this.productDetails;
    }
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


  getSubDestinations(destinationKey: any) {
    let url2 = this.baseUrl + 'subDestination/destinationId/' + destinationKey.key;
    console.log("calling in service : "+destinationKey.key);
    return this.http.get(url2, this.httpOptions);
  }

  getStay(stay: any) {
    let url3 = this.baseUrl + 'stay/subDestinationId/' + stay.key;
    console.log("calling in Get STay in service : "+stay.key);
    return this.http.get(url3, this.httpOptions);
  }

  getSightseeing(sightseeing: any) {
    let url5 = this.baseUrl + 'sightseeing/subDestinationId/' + sightseeing.key;
    console.log("calling in Get sightservice in service : "+sightseeing.key);
    return this.http.get(url5, this.httpOptions);
  }

  getMeal(meal: any) {
    let url4 = this.baseUrl + 'meal/stayId/' + meal.key;
    console.log("calling in Get STay in service : "+meal.key);
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
    let post_url =this.baseUrl+"destination/bulk";
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

  getProduct(data:any){
    let urlproduct=this.baseUrl+"Products/key/"+data;
    console.log(urlproduct);
    return this.http.get(urlproduct)
  }

  uploadProduct(data:any){
    let uploadUrl=this.baseUrl+"Products";
    console.log(data);
    return this.http.post(uploadUrl,data);
  }

  getProductDetails(productCode:any){
    let geturl=this.baseUrl+"Products/productCode?productCode="+productCode;
    console.log("Calling function getDetails ");
    return this.http.get(geturl);
  }

  getInquiry(){
    let inquiry=this.baseUrl+"ProductInquiry/agentId?agentId=AID324353WGX"
   console.log("Calling Inquiry");
   return this.http.get(inquiry)
  }
  postInquiry(data:any){
    let postInquiry=this.baseUrl+"ProductInquiry";
    console.log(data);
    return this.http.post(postInquiry,data);
  }
  postAgent(data:any){
    let postAgent=this.baseUrl+"agent";
    console.log(data);
    return this.http.post(postAgent,data);
  }
}
