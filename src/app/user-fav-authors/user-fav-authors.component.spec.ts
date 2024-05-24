import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavAuthorsComponent } from './user-fav-authors.component';

describe('UserFavAuthorsComponent', () => {
  let component: UserFavAuthorsComponent;
  let fixture: ComponentFixture<UserFavAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFavAuthorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFavAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
