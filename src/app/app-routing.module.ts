import { Component, NgModule } from '@angular/core';
import  {CommonModule} from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
//import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

{path:'' , component :HomeComponent},

{

  path:'',
 // runGuardsAndResolvers:'always',
 // canActivate:[AuthGuard],

  children:[
  {path:'members' , component :MemberListComponent, canActivate :[AuthGuard]},
  {path:'members/:id' , component :MemberDetailComponent},
  {path:'lists' , component :ListsComponent},
  {path:'message/:username' ,component:MessagesComponent },
  {path:'**' ,component:MessagesComponent ,pathMatch: 'full'},

  ]


},
{path:'errors' , component: ListsComponent},
{path:'**' , component: HomeComponent , pathMatch:'full'}



];




@NgModule({
 // CommonModule,
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export const routing: TestErrorsComponent = RouterModule.forRoot(appRoutes); 
export class AppRoutingModule { }
