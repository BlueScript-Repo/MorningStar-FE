import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from './Package';
import { PackagePdfRequest } from './PackagePdfRequest';

@Injectable({
  providedIn: 'root',
})
export class PackageServiceService {
  constructor(private http: HttpClient) {}

  baseUrl =
    'http://morningstarapis-env.eba-k8smp6gh.ap-south-1.elasticbeanstalk.com/';
  getUserData(user: any) {
    let url_user = this.baseUrl + 'user/contact/' + user;
    return this.http.get(url_user);
  }

  getDestinations() {
    console.log('Calling backend');
    let url1 = this.baseUrl + 'destination';
    return this.http.get(url1);
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
}
