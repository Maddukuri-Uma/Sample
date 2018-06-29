import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ImageService } from './image.service';
import { SampleComponent } from './sample/sample.component';
import { ImagefileComponent } from './imagefile/imagefile.component';
import { HorizontalImageService } from './horizontal-image.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SampleComponent,
    ImagefileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageService,HorizontalImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
