import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AgentGuard } from './agent.guard';


const routes: Routes = [
  {path: 'admin', loadChildren:()=>import("./user/user.module").then(mod=>mod.UserModule)},
  {path: 'landing',loadChildren:()=>import("./landing/landing.module").then(mod=>mod.LandingModule)},
  {path:'',redirectTo:'/landing/landingPage',pathMatch:'full'},
  {path: 'dealsPage',loadChildren:()=>import("./deal/deal.module").then(mod=>mod.DealModule)},
  {path: 'agent',loadChildren:()=>import("./add-new-agent/add-new-agent.module").then(mod=>mod.AddNewAgentModule),canActivate:[AuthGuard]},
  {path: 'AdminInquiryPage',loadChildren:()=>import("./inquiries/inquiries.module").then(mod=>mod.InquiriesModule),canActivate:[AuthGuard]},
  {path: 'AgentInquiryPage',loadChildren:()=>import("./inquiries/inquiries.module").then(mod=>mod.InquiriesModule),canActivate:[AgentGuard]},
  {path: 'ProductList',loadChildren:()=>import("./product-list/product-list.module").then(mod=>mod.ProductListModule)},
  {path: 'editproduct',loadChildren:()=>import("./editproduct/editproduct.module").then(mod=>mod.EditproductModule),canActivate:[AuthGuard]},
  {path: 'newproduct',loadChildren:()=>import("./newproduct/newproduct.module").then(mod=>mod.NewproductModule),canActivate:[AuthGuard]},
  {path:'updatedata',loadChildren:()=>import("./updatedata/updatedata.module").then(mod=>mod.UpdatedataModule)},
  {path:'CMS',loadChildren:()=>import("./cms/cms.module").then(mod=>mod.CmsModule),canActivate:[AuthGuard]},
  {path:'details',loadChildren:()=>import("./details/details.module").then(mod=>mod.DetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
