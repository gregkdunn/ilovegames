import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BoardGameFormComponent } from './components/board-games/board-game-form/board-game-form.component';
import { BoardGameListItemComponent } from './components/board-games/board-game-list-item/board-game-list-item.component';
import { BoardGamesListComponent } from './components/board-games/board-games-list/board-games-list.component';
import { GameContainerComponent } from './containers/games/game.container.component';
import { ApiService } from './services/api.service';
import { BoardGameEffects } from './store/effects/board-game.effects';
import { metaReducers, rootReducer } from './store/reducers/root.reducer';

export const storeModuleForRoot = StoreModule.forRoot(rootReducer, {
  metaReducers
});
export const effectsModuleForRoot = EffectsModule.forRoot([BoardGameEffects]);

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BoardGameFormComponent,
        BoardGameListItemComponent,
        BoardGamesListComponent,
        GameContainerComponent
      ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        storeModuleForRoot,
        effectsModuleForRoot
      ],
      providers: [ApiService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Greg\'s Games', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Greg\'s Games');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to ilovegames!'
    );
  });
});
