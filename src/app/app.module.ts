import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { orderByPipe } from './shared/order-by.pipe';
import { CountryListComponent } from './schools/country-list/country-list.component';
import { SchoolListComponent } from './schools/school-list/school-list.component';
import { SchoolsComponent } from './schools/schools.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    orderByPipe,
    CountryListComponent,
    SchoolListComponent,
    SchoolsComponent,
    SchoolDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
