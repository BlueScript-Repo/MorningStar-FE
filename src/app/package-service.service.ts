import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Package} from './Package';
import {PackagePdfRequest} from './PackagePdfRequest';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {
  constructor(private http: HttpClient) {}

  baseUrl =
    'http://morningstarapis-env.eba-k8smp6gh.ap-south-1.elasticbeanstalk.com/';
  token=`eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1ZGF5YmFqYXJlMkBnbWFpbC5jb20iLCJleHAiOjE2MTYxNzExMzMsImlhdCI6MTYxNjE1MzEzM30.a0aCPIVv2HIEoFWsyQryxO5lqosC1u-uNq5mjVjN23Q`;
  
  
  
  
  getUserData(user: any) {
    let url_user = this.baseUrl + 'user/contact/' + user;
    return this.http.get(url_user);
  }

  getDestinations() {
    console.log('Calling backend');
    let url1 = this.baseUrl + 'destination';

    console.log(url1);
    const headers = new HttpHeaders();
    headers.set( 'Authorization',this.token);
    
    console.log(headers);
    const headers_object = new HttpHeaders().set("Authorization",`Bearer`+` `+this.token);

    return this.http.get(url1,{headers: headers_object} );
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
    return this.http.post(url4, JSON.stringify(userPackage));
  }

  geenratePDF(userPackage: PackagePdfRequest) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8',
      );
    let url4 = this.baseUrl + 'pdfGenerate';
    return this.http.post(url4, JSON.stringify(userPackage), {
      headers: headers,
      responseType: 'blob',
    });
  }
}