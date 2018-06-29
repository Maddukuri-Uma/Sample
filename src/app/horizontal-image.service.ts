import { Injectable } from '@angular/core';

@Injectable()
export class HorizontalImageService {

  constructor() { }

  image_path = ['./assets/imgone.jpg','./assets/imgtwo.jpg',
  				'./assets/imgthree.jpg','./assets/imgfour.jpg'];

  image_name = ['Seasons','Way','Mountains','Trekking'];

}
