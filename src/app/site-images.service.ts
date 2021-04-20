import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteImagesService {
  
  constructor(private http: HttpClient) { 
  } 

  siteImagesUrl="http://localhost:8080/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:""
    })
  } 

  getImages(keyVal: any) {
    console.log("bucketName :"+keyVal)
    let url=this.siteImagesUrl + "awsS3Files/bulk/" +keyVal ;
    console.log("bucketName :"+keyVal)
    return this.http.get(url,this.httpOptions);
  } 
  
}
