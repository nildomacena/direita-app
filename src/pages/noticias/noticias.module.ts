import { IonicImageLoader } from 'ionic-image-loader';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasPage } from './noticias';

@NgModule({
  declarations: [
    NoticiasPage,
  ],
  imports: [
    IonicImageLoader.forRoot(),
    IonicPageModule.forChild(NoticiasPage),
  ],
})
export class NoticiasPageModule {}
