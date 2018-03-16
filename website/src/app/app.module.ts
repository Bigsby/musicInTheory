import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutedComponents } from './app-routing.module';

import { AppComponent } from './components/app.component/app.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
