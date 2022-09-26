import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AccountService } from './_service/account.service';
import{User} from './_models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;

  constructor(private http:HttpClient ,private accountServices:AccountService){
    
  }

  ngOnInit() {
 this.getUser();
 this.setCurrentUser();

  }

  setCurrentUser(){

const user:User =JSON.parse(localStorage.getItem('user'));
this.accountServices.setCurrentuser(user);
  }

  getUser(){
 this.http.get('https://localhost:44337/api/account/GetUsers').subscribe(response=>{
     this.users=response;
     //alert(response);
     console.log(response);
        },
        error=>{
      console.log(error);
         });
  }
}
