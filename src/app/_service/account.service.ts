import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { importType } from '@angular/compiler/src/output/output_ast';
import{map} from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl='https://localhost:44337/api/';
  
  private currentUserstore =new ReplaySubject<User>(1);
  currentUser$ =this.currentUserstore.asObservable();

  constructor(private http:HttpClient) {}

    login(model:any){
return this.http.post(this.baseUrl+'account/login',model).pipe (
 map((response:User)=>{
 const user=response;
 console.log(response);

 if(user){
localStorage.setItem('user',JSON.stringify(user));
}
})
) 
}


register(model:any){
return this.http.post(this.baseUrl+'account/register',model).pipe(
map((user:User)=>{
if((user)){
localStorage.setItem('user',JSON.stringify(user));
this.currentUserstore.next(user);
}
return user;
})
)
}

 setCurrentuser(user:User){
 this.currentUserstore.next(user);
}

logout(){
  this.currentUserstore.next(null);
  localStorage.removeItem('user');
  }



  }





   

