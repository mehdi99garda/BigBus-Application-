import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuiNousPage } from './qui-nous.page';

describe('QuiNousPage', () => {
  let component: QuiNousPage;
  let fixture: ComponentFixture<QuiNousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiNousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuiNousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
