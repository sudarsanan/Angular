import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {AppGamesComponent} from './app.games.component';
import {AppNavComponent} from './app.navigation.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AppGamesComponent, AppNavComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
