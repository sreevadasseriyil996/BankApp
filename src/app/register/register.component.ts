import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private fb:FormBuilder, private ds:DataService,private router:Router){

  }
  acno="";
  uname="";
  pswd="";
  
registerForm=this.fb.group({
  acno:[''],
  uname:[''],
  pswd:['']
})


  register(){
 console.log(this.registerForm);
    var acno=this.registerForm.value.acno;
    var uname=this.registerForm.value.uname;
    var pswd=this.registerForm.value.pswd;
    const result=this.ds.register(acno,uname,pswd);
    if(result){
      alert('success')
      this.router.navigateByUrl('')
    }
    else{
      alert('already registered')
    }
  }
 
}
