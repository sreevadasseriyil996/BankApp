import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="Your perfect banking partner";
  account="Enter your Account here";

  login(){
    alert('Login Clicked');
  }
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


  userDetails:any={
    1000:{acno:1000,username:"Arun",password:1000,balance:1000},
    1001:{acno:1001,username:"sree",password:1001,balance:1000},
    1003:{acno:1003,username:"malu",password:1003,balance:1000},
  }

  // Userlogin(){
  //   var acno=this.acno;
  //   var pswd=this.pswd;
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
  //   }
  // }
  Userlogin(a:any,p:any){
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;

    if(acno in  userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login Succesful');
      }
      else{
        alert('Invalid password');
      }
    }
    else{
      alert('Invalid user details')
    }
  }

}
