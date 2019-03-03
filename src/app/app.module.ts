import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
export const storeDevtoolsModule = StoreDevtoolsModule.instrument({
  maxAge: 100,
  name: 'ilovegames NgRx Store'
});

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BoardGameFormComponent,
    BoardGameListItemComponent,
    BoardGamesListComponent,
    GameContainerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    storeModuleForRoot,
    effectsModuleForRoot,
    storeDevtoolsModule
  ],
  providers: [ApiService]
})
export class AppModule {}
