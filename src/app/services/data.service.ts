import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  userDetails:any={
    1000:{acno:1000,username:"Arun",password:1000,balance:1000,transaction:[]},
    1001:{acno:1001,username:"sree",password:1001,balance:1000,transaction:[]},
    1003:{acno:1003,username:"malu",password:1003,balance:1000,transaction:[]},
  }
  register(acno:any,username:any,password:any){
    let userDetails=this.userDetails;
    if(acno in userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno,username,password,balance:0,transaction:[]
      }
      console.log(userDetails);
      return true
      
    }
    
  }
  currentUser="";
login(acno:any,pswd:any){
  let userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      this.currentUser=userDetails[acno]['username']
      this.currentAcno=acno;

      return true;

    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}


  constructor() { }


  deposit(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){

 userDetails[acno]['balance']+=amount;

 userDetails[acno]['transaction'].push({
  Type:'Credit',
  Amount:amount
 })
 
 console.log(userDetails);
 
 return userDetails[acno]['balance']


      }
      else{
        alert('password mismatch')
        return false;

      }}
      else{
        alert('invalid data')
        return false;
      }
    }


   
  withdraw(acno:any,pswd:any,amt:any){
    var amount1=parseInt(amt)
    let userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){

 userDetails[acno]['balance']-=amount1;
 userDetails[acno]['transaction'].push({
  Type:'Credit',
  Amount:amount1
 })
 
 return userDetails[acno]['balance']


      }
      else{
        alert('password mismatch')
        return false;

      }}
      else{
        alert('invalid data')
        return false;
      }
    }
currentAcno=""
    getTransaction(acno:any){
      return this.userDetails[acno]['transaction']
    }

  } 
