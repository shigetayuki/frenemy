import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { DisclaimarComponent } from './disclaimar/disclaimar.component';
import HomeComponent from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full'},
  { path: 'top', component: HomeComponent,data: { animation: 'top' } },
  { path: 'about', component: AboutComponent,data: { animation: 'about' } },
  { path: 'services', component: ServicesComponent,data: { animation: 'services' } },
  { path: 'partners', component: PartnersComponent,data: { animation: 'partners' } },
  { path: 'company', component: CompanyComponent,data: { animation: 'company' } },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent,data: { animation: 'privacyPolicy' } },
  { path: 'disclaimer', component: DisclaimarComponent,data: { animation: 'disclaimer' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
