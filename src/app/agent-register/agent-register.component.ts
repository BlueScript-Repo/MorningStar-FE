import { Component, OnInit } from '@angular/core';
import {UserService} from './../user/user.service';
import {PackageServiceService} from './../package-service.service';
import {Agents} from './Agent';
@Component({
  selector: 'app-agent-register',
  templateUrl: './agent-register.component.html',
  styleUrls: ['./agent-register.component.css']
})
export class AgentRegisterComponent implements OnInit {
show="true";
  constructor(private http:UserService,private service:PackageServiceService) { }

  agents:Agents={
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
   })
      
  }


}
