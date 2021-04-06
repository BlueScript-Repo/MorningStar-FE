import { Component, OnInit } from '@angular/core';
import {Arr1} from './Arr1';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arr1:Arr1[]=[];
  arr2:Arr1[]=[];
  addData(dataForm:any){
    var count=dataForm.country;
    var dest=dataForm.destination;
    var note=dataForm.notes;
    var pin=dataForm.pincode;
    var policy=dataForm.policies;
console.log(JSON.stringify(dataForm));
this.arr1.push({
  count1:count,
  destination:"",
  notes:""
})
console.log(this.arr1);

  }
  addData1(dataForm1:any){
    var count=dataForm1.country1;
    var dest=dataForm1.country1;
    var note=dataForm1.notes1;
    var pin=dataForm1.pincode1;
    var policy=dataForm1.policies1;
console.log(JSON.stringify(dataForm1));
this.arr1.push({
  count1:"",
  destination:dest,
  notes:""
})
console.log(this.arr1);

}

  addBig(bigForm:any){
    console.log(JSON.stringify(bigForm));
    
  }
  arr3:Arr1[]=[];
  addData2(dataForm2:any){
    var count=dataForm2.country;
    var dest=dataForm2.destination2;
    var note=dataForm2.country2;
    var pin=dataForm2.pincode2;
    var policy=dataForm2.policies2;
console.log(JSON.stringify(dataForm2));
this.arr1.push({
  count1:"",
  destination:"",
  notes:note
})
console.log(this.arr1);

  }

  ShowArrays(){
    // console.log(this.arr1);
    // console.log(this.arr2);
    // this.arr1=this.arr1.concat(this.arr2);
    // console.log(this.arr1);
    // this.arr1=this.arr1.concat(this.arr3)
    // console.log(JSON.stringify(this.arr1));
    var a = [1,2];
    var b = [3,4];
    var c = [5,6,7];
    // var d = [...a, ...b, ...c];
    var d=a.concat(b,c)
    console.log(d);
    
  }
  
}
