import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy.component';
import { WrapperComponent } from './wrapper.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    WrapperComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
