// Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components:
import { AppComponent } from './app.component';
import { PersonComponent } from './people/person/person.component';
import { FormComponent } from './people/form/form.component';
import { PeopleComponent } from './people/people.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component'

// Services:
import { LogginService } from './LoggingService.service';
import { PeopleService } from './PeopleService.service';
import { DataServices } from './data.service';
import { LoginService } from './login/login.service';
import { LoginGuard } from './login/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent,
    PeopleComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LogginService,
    PeopleService,
    DataServices,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
