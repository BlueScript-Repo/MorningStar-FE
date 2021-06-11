import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from './../../package-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  constructor(private agentlists:PackageServiceService,private router:Router) { }

  listall:any=[];

  ngOnInit(): void {


  this.agentlists.getAgentList().subscribe((result)=>{
    console.log(result);
    this.listall=result;
  });
}

  delete(id:any,agentid:any){
    console.log(agentid);
    this.listall = this.listall.filter((v:any, i:any) => i != id);
    this.agentlists.deleteAgent(agentid).subscribe(result=>{
        console.log(result);
    })
 

  
}

}
