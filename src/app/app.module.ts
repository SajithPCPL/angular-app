import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HttpModule,JsonpModule} from '@angular/http';
import { ReactiveFormsModule, FormArray} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {LoginService} from './login.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const route:Routes = [
{
path:'',
component:LoginComponent
},
{
  path:'mainpage',
  component:MainpageComponent
}
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 HttpModule,
 JsonpModule,
    RouterModule.forRoot(route),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
