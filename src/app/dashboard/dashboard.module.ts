import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from 'src/theme/header/header.component';
import { FooterComponent } from 'src/theme/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ]
})
export class DashboardModule { }
