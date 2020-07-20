import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgChatModule } from 'ng-chat';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
