import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qui-nous',
  templateUrl: './qui-nous.page.html',
  styleUrls: ['./qui-nous.page.scss'],
})
export class QuiNousPage implements OnInit {

  header :string;
  msg : string;
  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async Alert(header , msg){
    let alert = await this.alertCtrl.create({
      mode : 'ios',
      header : header,
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
