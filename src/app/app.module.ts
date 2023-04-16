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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HansLibModule.forRoot({ apiUrl: environment.ROOT_URL }),
  ],
  providers: [ScreenService,
    MouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
