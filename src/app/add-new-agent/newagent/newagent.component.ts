import { Component, OnInit } from '@angular/core';
import {UserService} from './../../user/user.service';
import {PackageServiceService} from './../../package-service.service';
@Component({
  selector: 'app-newagent',
  templateUrl: './newagent.component.html',
  styleUrls: ['./newagent.component.css']
})
export class NewagentComponent implements OnInit {

  show="true";
  constructor(private http:UserService,private service:PackageServiceService) { }

  agents:any={
    confirmPassword:'',
    contactNo:'',
    // departmentId:'',
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    workingArea:''
  }

  role:any="user";

key=10;
  ngOnInit(): void {
    this.key=10;
    this.role=localStorage.getItem('role');
    console.log("calling in agent ONinit"+this.role);
    this.authenticate()
  }

  authenticate(){
    console.log(this.role);
    if(this.role!="USER"){
      // alert("Hello Admin");
      this.key=0
      console.log("key is " + this.key);
    }
    else{ 
      alert("Hello User")
      this.key=10;
      console.log("key is " + this.key);
      
    } 

  }
  errCode:any=0;
  createAgent(agentForm:any){
    console.log("calling agent form ");
   console.log(agentForm);
   this.agents={
    confirmPassword:agentForm.confirm,
    contactNo:agentForm.contact,
    // departmentId:"",
    email:agentForm.email,
    firstName:agentForm.first,
    lastName:agentForm.last,
    password:agentForm.Password,
    workingArea:agentForm.working
   }
   console.log(this.agents);
   return this.service.postAgent(this.agents).subscribe(res=>{
     console.log(res);
     this.errCode=200;
     console.log("Error code is");
     
     console.log(this.errCode);
     if (this.errCode==200){
      const container = document.querySelector('.popup');
       container?.classList.toggle('active');
       console.log("Error code is equals to 200");
    }


   },(error)=>{
    console.log(error);
    this.errCode=error.status;
    console.log(this.errCode);
    if (this.errCode!=200) {
      const container = document.querySelector('.popup1');
      container?.classList.toggle('active');
      console.log("Error code is not equals to 200");   
    } 
   })
      
  }
  // modal(){
  //  var element= document.getElementById("open-popup-btn")?.addEventListener("click",function(){
  //     document.getElementsByClassName("popup")[0].classList.add("active");
  //   });
  //  }
   closeModal(){
     
    document.getElementById("dismiss-popup-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup")[0].classList.remove("active");
    });
   }
   closeModal1(){
   
    document.getElementById("dismiss-popup1-btn")?.addEventListener("click",function(){
      document.getElementsByClassName("popup1")[0].classList.remove("active");
    });
   }
 
}
