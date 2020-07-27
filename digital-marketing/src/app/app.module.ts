import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { CenterBarComponent } from './center-bar/center-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginUserComponent } from './login-user/login-user.component';
import { ActividadesService } from '../app/actividades.service';
import { DictionaryService } from '../app/dictionary.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeadBarComponent,
    FootBarComponent,
    CenterBarComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [ActividadesService , DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
