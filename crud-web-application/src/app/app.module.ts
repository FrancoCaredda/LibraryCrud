import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertPageComponent } from './components/insert-page/insert-page.component';
import { GetPageComponent } from './components/get-page/get-page.component';
import { UpdatePageComponent } from './components/update-page/update-page.component';
import { DeletePageComponent } from './components/delete-page/delete-page.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InsertPageComponent,
    GetPageComponent,
    UpdatePageComponent,
    DeletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
