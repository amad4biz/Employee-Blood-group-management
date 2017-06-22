import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//user defined Component
import { WelcomeComponent } from './Home/home.component';
import {SignUpComponent} from './Login/SignUp.Component';
import {SignInComponent} from './Login/signIn.component';
import { SearchComponent } from './InTray/Search.component';
import {EmployeeFeedbackcomponent} from './FeedBack/FeedBack.component';
import {EmployeeRegistrationcomponent} from './Employee/Employee.Registration.component';
import {BloodRequesterComponent} from './BloodRequester/Blood.Requester.component';
import {notfoundComponent} from './notfound/not-found.component';
import {DemandComponent} from './Demands/blood.Demands';

const appRoutes: Routes = [
        { path: '', component: WelcomeComponent },
        { path: 'DemandComponent', component: DemandComponent } ,
        { path: 'EmployeeRegistration', component: EmployeeRegistrationcomponent } ,
        { path: 'BloodRequesterRegistration', component:BloodRequesterComponent},
        { path: 'InTray', component:SearchComponent},
        { path: 'EmployeeFeedBack', component:EmployeeFeedbackcomponent},
        { path: 'Login', component:SignInComponent},
        { path: 'SignUp', component:SignUpComponent},
       { path: '**', component:notfoundComponent}
];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);