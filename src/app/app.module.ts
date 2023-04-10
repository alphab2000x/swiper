import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderBasicComponent } from './slider-basic/slider-basic.component';
import { SliderAdvancedComponent } from './slider-advanced/slider-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderBasicComponent,
    SliderAdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
