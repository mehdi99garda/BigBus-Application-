import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.page.html',
  styleUrls: ['./circuits.page.scss'],
})
export class CircuitsPage implements OnInit {

  loading : boolean;
  finishloading : boolean;

  constructor(public afDB: AngularFireDatabase) { 
    this.getData();
  }

  ngOnInit() {
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
    },6000)
  }

  add() {
    this.afDB.list('Users').push({
      pseudo: 'mehdii'
    });
  }
}
