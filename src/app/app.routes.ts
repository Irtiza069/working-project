import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TalksComponent } from './talks/talks.component';
import { QuantuxComponent } from './quantux/quantux.component';
import { LoginComponent } from './login/login.component';
import { ReativeformComponent } from './reativeform/reativeform.component';
import { AlertComponent } from './alert/alert.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'contact', component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'talks',component:TalksComponent},
    {path:'quantux',component:QuantuxComponent},
    {path:'login',component:LoginComponent,
        children:[
            {path:'looo',component:LoginFormComponent}
        ]
    },
    {path:'R',component:ReativeformComponent},
    {path:'alert',component:AlertComponent},
    {path:'Ui',component:MaterialUiComponent},
    {path:'con',component:ContactInformationComponent}
];
