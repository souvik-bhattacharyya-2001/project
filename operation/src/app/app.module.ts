import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { DetailsComponent } from './comp/details/details.component';
import { NewservicesService } from './ser/newservices.service';
import { DescComponent } from './comp/desc/desc.component';
import { SearchComponent } from './comp/search/search.component';
import { FormComponent } from './comp/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    DescComponent,
    SearchComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
