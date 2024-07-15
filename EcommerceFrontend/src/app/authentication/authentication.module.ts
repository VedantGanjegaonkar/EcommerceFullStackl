import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormGroup} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  exports:[
    SignupComponent,
    LoginComponent
  ]
})
export class AuthenticationModule { }
