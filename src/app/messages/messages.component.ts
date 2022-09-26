import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app.module';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  users:any;

  temp:any;
  id:any;

  retrivedata: Array<object> = [];

  constructor(private http:HttpClient ,private accountServices:AccountService){
    
  }


  ngOnInit(): void {

    
this.getUser();
  }


  getUser(){
    this.http.get('https://localhost:44337/api/account/GetUsers').subscribe(response=>{
        this.users=response;
        //alert(response);
       // console.log(response);
        this.retrivedata.push(response);

       // console.log(this.retrivedata);
           },
           error=>{
         console.log(error);
            });
     }

     FullData(sid){

      //this.http.get('https://localhost:44337/api/account/'+ sid).subscribe(response=>{
       // this.temp=response;
    
       // this.id=sid;
       // console.log(this.id);
       // console.log(sid);
       // this.id =new this.id();

     this.id = this.users.find(s=> s.id==sid)

     //console.log(this.id);

     
        //alert(response);
       // console.log(response);
        //    },
        //    error=>{
        //  console.log(error);
        //     });

     }


    //  $scope.getRecord = function(sid) {
    //   id = sid;
    //   $scope.student = $scope.students.find(s=>s.id ==sid);        
  }


    //  onSelect(tmp: retrivedata  ): void {
    //   this.temp = tmp;
    // }


