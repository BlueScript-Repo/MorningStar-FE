import { Component, OnInit } from '@angular/core';
import {Arr1} from './Arr1';
import {Arr2} from './Arr2';
import {Arr3} from './Arr3';
import {Arr4} from './Arr4';
import {PackageServiceService} from './../package-service.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http:PackageServiceService) { }

  ngOnInit(): void {
    // this.getdestination();
  }
  arr1:Arr1[]=[];
  arr2:Arr2[]=[];
  addData(dataForm:any){
    var count=dataForm.country;
    // var dest=dataForm.destination;
    // var note=dataForm.notes;
    // var pin=dataForm.pincode;
    // var policy=dataForm.policies;
console.log(JSON.stringify(dataForm));
this.arr1.push({
  count1:count,
})
console.log(this.arr1);

  }
  addData1(dataForm1:any){
    var count=dataForm1.country1;
    var dest=dataForm1.state;
    var note=dataForm1.notes1;
    var pin=dataForm1.pincode1;
    var policy=dataForm1.policies1;
console.log(JSON.stringify(dataForm1));
this.arr2.push({
destination:dest
})
console.log("Inside...."+JSON.stringify(this.arr2));

}

  addBig(bigForm:any){
    console.log(JSON.stringify(bigForm));
    
  }
  arr3:Arr3[]=[];
  addData2(dataForm2:any){
    var count=dataForm2.country;
    var dest=dataForm2.destination;
    var note=dataForm2.district;
    var pin=dataForm2.pincode2;
    var policy=dataForm2.policies2;
console.log(JSON.stringify(dataForm2));
this.arr3.push({
  notes:note
})
console.log(this.arr3);

  }
arr4:Arr4[]=[];
  ShowArrays(){
    // console.log(this.arr1);
    // console.log(this.arr2);
    // this.arr4=[...this.arr1,...this.arr2];
    // console.log(this.arr1);
    // this.arr1=this.arr1.concat(this.arr3)
    // console.log(JSON.stringify(this.arr1));
    var a = [1,2];
    var b = [3,4];
    var c = [5,6,7];
    // var d = [...a, ...b, ...c];
    var d=a.concat(b,c)
    console.log(d);
    this.arr4.push({
      count1:this.arr1[0].count1,
      destination:this.arr2[0].destination,
      notes:this.arr3[0].notes
    })
    console.log("this is arr4"+JSON.stringify(this.arr4));
    
  }
  showTotalData(totalForm:any){
    console.log(totalForm);
    
  }

  getcountry(country:any){
    let count=country;
    console.log(count);
  }
  getstate(state:any){
    let st=state;
    console.log(st);
  }
  getdesti(dest:any){
    let desti=dest
    console.log(desti);
    
  }
  destination:any={}
  getdestination(){
    this.http.getDestinations1().subscribe((res=>{
      console.log(JSON.stringify(res));
      this.destination=res;
    }))
  }





 
    profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    });
  
    getProfile(){
      console.log(this.profileForm.value);
      console.log(this.profileForm.value.address);
      
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
  }


