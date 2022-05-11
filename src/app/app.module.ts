import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { LikedComponent } from './liked/liked.component';
import { DislikedComponent } from './disliked/disliked.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    LikedComponent,
    DislikedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
