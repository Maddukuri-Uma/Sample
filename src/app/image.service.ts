import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

   
   images = ['./assets/user_img.png','./assets/device-img.jpg',
   			 './assets/network-img.jpg'];
   text_heading = ['Add users','Add devices',
   			'Roles and role assignments'];
   text_para = ['Learn how to add users','A brief video on adding devices',
   				'Using roles and creating role assignments'];

   button_data = ['Permissions associated with roles',
   					'Email validation is available',
   					'Recent updates panel'];

   
}
