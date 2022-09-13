import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { CompanyComponent } from './company/company.component';
import HomeComponent from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimarComponent } from './disclaimar/disclaimar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    AboutComponent,
    ServicesComponent,
    PartnersComponent,
    CompanyComponent,
    HomeComponent,
    ApplicationComponent,
    PrivacyPolicyComponent,
    DisclaimarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
