import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewagentComponent} from './newagent/newagent.component';
import {AgentListComponent} from './agent-list/agent-list.component';

const routes: Routes = [
  {path: 'newagent', component: NewagentComponent},
  {path: 'Listagent', component: AgentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewAgentRoutingModule { }
