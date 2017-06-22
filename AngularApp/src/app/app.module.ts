import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {RouterModule,Routes} from '@angular/router';
import {appRouting} from './app.Routing';
//my compinent
import { WelcomeComponent } from './Home/home.component';
import {SignUpComponent} from './Login/SignUp.Component';
import {SignInComponent} from './Login/signIn.component';
import { SearchComponent } from './InTray/Search.component';
import {EmployeeFeedbackcomponent} from './FeedBack/FeedBack.component';
import {EmployeeRegistrationcomponent} from './Employee/Employee.Registration.component';
import {BloodRequesterComponent} from './BloodRequester/Blood.Requester.component';
import {notfoundComponent} from './notfound/not-found.component';
import {TebgmService} from './app.service';
import {DemandComponent} from './Demands/blood.Demands';
@NgModule({
  imports: 
  [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  declarations: 
    [ 
      AppComponent,
      WelcomeComponent,
      SignUpComponent,
      SearchComponent,
      SignInComponent,
      EmployeeFeedbackcomponent,
      EmployeeRegistrationcomponent,
      BloodRequesterComponent,
      notfoundComponent,
      DemandComponent
      ],
  providers: [TebgmService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
