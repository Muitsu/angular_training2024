import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGuessGameComponent } from './app-guess-game.component';

describe('AppGuessGameComponent', () => {
  let component: AppGuessGameComponent;
  let fixture: ComponentFixture<AppGuessGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGuessGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppGuessGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
