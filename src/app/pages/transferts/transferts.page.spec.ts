import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransfertsPage } from './transferts.page';

describe('TransfertsPage', () => {
  let component: TransfertsPage;
  let fixture: ComponentFixture<TransfertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransfertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
