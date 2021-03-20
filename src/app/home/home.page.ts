import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  msg : string;
  loading : boolean;
  finishloading : boolean;
  
  constructor(private alertCtrl : AlertController) {
    this.getData();
  }

  option={
    slidesPreview: 1.5,
    centerSlides: true,
    loop: true,
    spaceBetweem: 10
  }

  getData(){
    this.loading = true;
    this.finishloading = false;
    setTimeout(() => {
      this.loading = false;
      this.finishloading = true;
    },5000)
  }

  async Alert(msg){
    let alert = await this.alertCtrl.create({
      mode : 'ios',
      message : msg,
      buttons : [
        {
          text : 'OK',
          role : 'cancel'
        }
      ]
    });

    await alert.present();
  }

}
