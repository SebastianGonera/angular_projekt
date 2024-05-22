import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAddComponent } from './authors-add.component';

describe('AuthorsAddComponent', () => {
  let component: AuthorsAddComponent;
  let fixture: ComponentFixture<AuthorsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
