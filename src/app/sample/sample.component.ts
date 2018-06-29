import { Component, OnInit, ElementRef } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

	data_head=['','',''];
	data_para=['','',''];
	data_img=['','',''];
	cmp_data_button=['','',''];
	
	data=['0','1','2'];
	
	str="PLAY VIDEO";

	

  constructor(private element:ImageService) { }

  ngOnInit() {

  	for (var i = 0; i < this.data_img.length; i++) {
  		this.data_img[i]=this.element.images[i];
  	}

  	for (var i = 0; i < this.data_para.length; i++) {
  		this.data_para[i]=this.element.text_para[i];
  	}

  	for (var i = 0; i < this.cmp_data_button.length; i++) {
  		this.cmp_data_button[i]=this.element.button_data[i];
  	}

  	for (var i = 0; i < this.data_head.length; i++) {
  		this.data_head[i]=this.element.text_heading[i];
  	}
  	
  }
}
