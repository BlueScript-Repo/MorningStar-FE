import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { AddNewAgentRoutingModule } from './add-new-agent-routing.module';
import { NewagentComponent } from './newagent/newagent.component';
import { AgentListComponent } from './agent-list/agent-list.component';


@NgModule({
  declarations: [
    NewagentComponent,
    AgentListComponent
  ],
  imports: [
    CommonModule,
    AddNewAgentRoutingModule,
    FormsModule
  ]
})
export class AddNewAgentModule { }
