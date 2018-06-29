import { Component, OnInit } from '@angular/core';
import { HorizontalImageService } from '../horizontal-image.service'

@Component({
  selector: 'app-imagefile',
  templateUrl: './imagefile.component.html',
  styleUrls: ['./imagefile.component.css']
})
export class ImagefileComponent implements OnInit {

	cmp_image_path = ['','','',''];
	cmp_image_name = ['','','',''];
	data = ['0','1','2','3'];

  constructor(private element : HorizontalImageService) { }

  ngOnInit() {

  	for (var i = 0; i < this.cmp_image_path.length; i++) {
  		this.cmp_image_path[i] = this.element.image_path[i];
  	}

  	for (var i = 0; i < this.cmp_image_name.length; i++) {
  		this.cmp_image_name[i] = this.element.image_name[i];
  	}
  }

}
