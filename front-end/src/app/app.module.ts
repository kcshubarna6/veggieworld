import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ProductsComponent } from './products/products.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FooterComponent } from './footer/footer.component';
import { ReadyComponent } from './ready/ready.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ProductsComponent,
    GetStartedComponent,
    FooterComponent,
    ReadyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
