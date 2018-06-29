import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor() { }

  status1=false;
  status2=false;
  status3=false;

  ngOnInit(){
  	
  }

  data1(){

  	if(this.status1==false){
  		this.status1=true;
  	}
  	else{
  		this.status1=false;
  	}

  }

  data2(){

  	if(this.status2==false){
  		this.status2=true;
  	}
  	else{
  		this.status2=false;
  	}
  }

  data3(){

  	if(this.status3==false){
  		this.status3=true;
  	}
  	else{
  		this.status3=false;
  	}

  }



}
