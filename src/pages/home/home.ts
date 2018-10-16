import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelevisionPage } from '../television/television';
import { BocinaPage } from '../bocina/bocina';
import { SmartphonePage } from '../smartphone/smartphone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
television=TelevisionPage;
bocina=BocinaPage;
smartphone=SmartphonePage;
lampara=LamparaPage;

  tele(){
    this.navCtrl.push(this.television);
  }

  smart(){
    this.navCtrl.push(this.smartphone);
  }

  lamp(){
    this.navCtrl.push(this.lampara);
  }

  boc(){
    this.navCtrl.push(this.bocina);
  }

  constructor(public navCtrl: NavController) {

  }


}
