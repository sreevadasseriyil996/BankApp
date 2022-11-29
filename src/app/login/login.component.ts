import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


constructor(private ds:DataService,private router:Router){

}


  aim="Your perfect banking partner";
  account="Enter your Account here";

  acno='';
  acnoChange(event:any){
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    
  }
  pswd='';
  pswdChange(event:any){
    console.log(event);
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }


  

   login(){
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;

    const result=this.ds.login(acno,pswd)
    if(result){
      alert('Login successful');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Invalid user details')
    }
  }
  // Userlogin(a:any,p:any){
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;

  //   if(acno in  userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('login Succesful');
  //     }
  //     else{
  //       alert('Invalid password');
  //     }
  //   }
  //   else{
  //     alert('Invalid user details')
  //   }}
 

}
