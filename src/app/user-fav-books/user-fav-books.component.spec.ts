import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavBooksComponent } from './user-fav-books.component';

describe('UserFavBooksComponent', () => {
  let component: UserFavBooksComponent;
  let fixture: ComponentFixture<UserFavBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFavBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFavBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
