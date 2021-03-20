import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcursionsPage } from './excursions.page';

describe('ExcursionsPage', () => {
  let component: ExcursionsPage;
  let fixture: ComponentFixture<ExcursionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcursionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcursionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
