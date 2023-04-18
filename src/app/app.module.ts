import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { HansLibModule, MouseService, ScreenService } from 'hans-lib';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { TrialComponent } from './trial/trial.component';
import { SummerComponent } from './summer/summer.component';
import { StuckComponent } from './stuck/stuck.component';
import { LeaseComponent } from './lease/lease.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifyComponent } from './notify/notify.component';
import { MatttComponent } from './mattt/mattt.component';
import { MattsComponent } from './matts/matts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeaderComponent,
    NotifyComponent,
    FooterComponent,
    ServicesComponent,
    TrialComponent,
    SummerComponent,
    StuckComponent,
    LeaseComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    ContactformComponent,
    MatttComponent,
    MattsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HansLibModule.forRoot({ apiUrl: environment.ROOT_URL }),
  ],
  providers: [ScreenService,
    MouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
