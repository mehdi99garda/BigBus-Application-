import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  msg : string;
  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
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
