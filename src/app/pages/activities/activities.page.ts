import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

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
