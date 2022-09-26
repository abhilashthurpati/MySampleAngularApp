import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  baseUrl ='https://localhost:44337/api/';
   

  constructor(private http:HttpClient,private rout:RouterModule) { }

  ngOnInit(): void {
  }


  get404Error(){
    
    this.http.get(this.baseUrl +'buggy/not-found').subscribe(response=>{
    console.log(response);

    },error=>{

      console.log(error);
    } 
    )
  }

  get400Error(){
    
    this.http.get(this.baseUrl +'buggy/bad-request').subscribe(response=>{
    console.log(response);

    },error=>{

      console.log(error);
    } 
    )
  }


  get500Error(){
    
    this.http.get(this.baseUrl +'buggy/server-error').subscribe(response=>{
    console.log(response);

    },error=>{

      console.log(error);
    } 
    )
  }


  get401Error(){
    
    this.http.get(this.baseUrl +'buggy/auth').subscribe(response=>{
    console.log(response);

    },error=>{

      console.log(error);
    } 
    )
  }


  get400ValidationError(){
    
    this.http.get(this.baseUrl +'buggy/not-found').subscribe(response=>{
    console.log(response);

    },error=>{

      console.log(error);
    } 
    )
  }

}
