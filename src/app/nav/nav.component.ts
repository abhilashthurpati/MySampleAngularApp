import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_service/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={}
currentUser$:Observable<User>;

loggedIn:boolean;
 
  constructor(private accountService:AccountService,private route:Router,private toastr:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {
    
this.currentUser$=this.accountService.currentUser$

 //this.getCurrentuser();

 //this.getUser();
  }

  

  login(){
   
this.accountService.login(this.model).subscribe(response=>{
 console.log(response);
  this.loggedIn=true;
  console.log(this.loggedIn);
  this.route.navigateByUrl('messages');
   
},error=>{
   console.log(error);
this.toastr.error(error.error);

  })
}


logOut(){

  this.accountService.logout();
  this.loggedIn=false;
}

// getCurrentuser(){

//   this.accountService.currentUser$.subscribe(user=>{

// this.loggedIn=!!user;
//  },error=>

//   {
//   console.log(error);

//   }
    
//   )
// }

// getUser(){
//   this.http.get('https://localhost:44337/api/account/GetUsers').subscribe(response=>{
//       this.model=response;
//       //alert(response);
//       console.log(response);
//          },
//          error=>{
//        console.log(error);
//           });
//    }

}
