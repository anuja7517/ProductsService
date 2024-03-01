import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { ProdCardComponent } from './shared/components/prod-card/prod-card.component';

import { MaterialModul } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProdFormComponent,
    ProdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModul,
    ReactiveFormsModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
