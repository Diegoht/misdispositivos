import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelevisionPage } from './television';

@NgModule({
  declarations: [
    TelevisionPage,
  ],
  imports: [
    IonicPageModule.forChild(TelevisionPage),
  ],
})
export class TelevisionPageModule {}
