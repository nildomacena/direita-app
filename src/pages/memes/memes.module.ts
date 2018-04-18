import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemesPage } from './memes';

@NgModule({
  declarations: [
    MemesPage,
  ],
  imports: [
    IonicPageModule.forChild(MemesPage),
  ],
})
export class MemesPageModule {}
