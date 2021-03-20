import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferts',
  templateUrl: './transferts.page.html',
  styleUrls: ['./transferts.page.scss'],
})
export class TransfertsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  option={
    slidesPreview: 1.5,
    centerSlides: true,
    loop: true,
    spaceBetweem: 10
  }
  
}
