import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.page.html',
  styleUrls: ['./excursions.page.scss'],
})
export class ExcursionsPage implements OnInit {

  loading : boolean;
  finishloading : boolean;

  constructor() { 
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
  
}
