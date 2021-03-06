import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FormPayzenComponent } from './form-payzen/form-payzen.component';

// Rutas
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FormPayzenComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
