import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemesPage } from './memes';

@NgModule({
  declarations: [
    MemesPage,
  ],
  imports: [
    IonicImageLoader.forRoot(),
    IonicPageModule.forChild(MemesPage),
  ],
})
export class MemesPageModule {}
